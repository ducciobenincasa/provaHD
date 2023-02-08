import { Component,  Input, OnChanges, OnInit,  SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HelpDeskModel } from '../../helpdesk/model/helpDesk.model';


@Component({
  selector: 'app-button-helpdesk',
  template: `
  <span class="form-group"  >
    <div class="col-12">
      <div class="form-row " [ngClass]="{'flex-column': setFlexColumn}">
         <div class="col-4 mb-3" [formGroup]="item"
          *ngFor="let item of rowData!|buttonfilter:level:idParent:id; let i=index;">
              <ng-container [ngSwitch]="item.Ico.trim()===''">
                <span *ngSwitchCase="true"  >
                  <div class="can-toggle d-flex col-12 justify-content-between"  >
                    <input type="checkbox"  [id]="i.toString()">{{item.Label}}
                    <label [attr.for]="i.toString()" >
                      <div class="can-toggle__switch ml-3" data-checked="Si" data-unchecked="No"></div>
                    </label>
                  </div>
                </span>
                <span  *ngSwitchDefault>
                  <div class="col-12">
                    <a href="#" class="card card-border flat text-center" (click)="onClickQuestionHandler($event, item)">
                      <fa-icon [icon]="item.Ico" class="fa-2x"></fa-icon>
                      <span class="strong display-block margin-top-sm">{{item.Label}}</span>
                    </a>
                  </div>
                </span>
              </ng-container>
          </div>

      </div>
    </div>
  </span>
`,
  styles: [`

  .card-border{
    --card-border-color: #c3c6d1;
    --card-border-width: 2px;
  }
  .card.flat {
    --card-link-box-shadow: none;
    --with-shadow-box-shadow-width: 0;
    --card-link-hover-border-width: 2px;
  }
  .margin-top-sm {
      margin-top: calc(1em * 12 / 16) !important;
      margin-top: var(--spacing-sm) !important;
  }
    `
  ]
})
export class ButtonHelpdeskComponent implements OnInit, OnChanges {
  @Input() rowData: HelpDeskModel[] | undefined;
  @Input() IcoName: IconProp = ['fas', 'download']
  @Input() Label: string | undefined = ''
  @Input() resetButtonClicked: boolean = false;

  // @Output() onCliCkButton:EventEmitter<any> = new EventEmitter();
  setFlexColumn='false';
  b: HelpDeskModel[] = [];
  level: number = 0;
  idParent: number | null | undefined = null;
  id: number | null | undefined = null;

  frmOffertHeaderRow = this.fb.array([]);

  get DetailCollection() {
    return this.frmOffertHeaderRow as FormArray;
  }
  constructor(    private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  createDetailRow(item:HelpDeskModel): FormGroup {
    return this.fb.group({
        item: item,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const { resetButtonClicked } = changes;
    if (resetButtonClicked && resetButtonClicked.currentValue) {
      this.level = 0;
      this.idParent = null;
      this.id = null;
      this.b = [];
    }
  }

  onClickCheckHandler(e: any,item:HelpDeskModel) {
    this.DetailCollection.push(
      this.createDetailRow(item)
    );
  }

  onClickQuestionHandler(e: Event, item: HelpDeskModel) {

    if (item.Ico === 'undo') {
      this.level = item.Level - 1;
      this.idParent = null;
      this.id = item.IdParent;
      this.b = this.b.slice(0, this.b.length - 1)
      return;
    }
    this.level = item.Level + 1;
    this.idParent = item.Id;
    this.id = null;

    this.b = [...this.b, item]
    this.createDetailRow(item)
  }
}
