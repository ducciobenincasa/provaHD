import { AfterViewInit, Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { HelpDeskModel } from '../../helpdesk/model/helpDesk.model';


@Component({
  selector: 'app-button-helpdesk',
  template: `
  <span class="form-group"  >
    <div class="col-12">
      <div class="form-row " [ngClass]="{'flex-column': setFlexColumn}">
         <div class="col-4 mb-3"
          *ngFor="let item of rowData!|buttonfilter:level:idParent:id; let i=index;">
              <ng-container     *ngIf="checIco(item.Ico)" ></ng-container>
              <ng-container [ngSwitch]="item.Ico.trim()===''">
                <span *ngSwitchCase="true"  >

                  <div class="can-toggle d-flex col-12 justify-content-between"  >
                    <input type="checkbox"  [id]="i.toString()" (click)="onClickCheckHandler($event, item)">{{item.Label}}
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
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonHelpdeskComponent),
      multi: true
    },
  ],
})
export class ButtonHelpdeskComponent implements OnInit, OnChanges, ControlValueAccessor, AfterViewInit {
  @Input() rowData: HelpDeskModel[] | undefined;
  @Input() breadCrumItems: HelpDeskModel[] | undefined;
  @Input() IcoName: IconProp = ['fas', 'download']
  @Input() Label: string | undefined = ''
  @Input() resetButtonClicked: boolean = false;
  @Output() onClickButton: EventEmitter<HelpDeskModel[]> = new EventEmitter();

  setFlexColumn = false;
  b: HelpDeskModel[] = [];
  level: number = 0;
  idParent: number | null | undefined = null;
  id: number | null | undefined = null;

  value: any = null;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges()
  }

  onTouched: any = () => { };
  onChange: any = () => { };

  writeValue(value: any): void {
    if (value) {
      this.b = this.b.slice(0, this.b.indexOf(value))
      this.onClickQuestionHandler(null, value);
    }
  }

  checIco(icoName: string) {
    this.setFlexColumn = icoName.trim() === '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { resetButtonClicked, rowData } = changes;
    if (resetButtonClicked && resetButtonClicked.currentValue) {
      this.setFlexColumn = false;
      this.level = 0;
      this.idParent = null;
      this.id = null;
      this.b = [];
      this.onChange(this.b)
      this.onClickButton.emit(this.b);
    }
  }

  onClickCheckHandler(e: any, item: HelpDeskModel) {
    this.b = [...this.b.filter(hd => hd.Id !== item.Id), item]
    this.onChange(this.b)
    this.onTouched()
  }

  onClickQuestionHandler(e: Event | null, item: HelpDeskModel) {
    if (item.Ico === 'undo') {
      this.level = item.Level - 1;
      this.idParent = null;
      this.id = item.IdParent;
      this.b = this.b.slice(0, this.b.length - 1)
    } else {
      this.level = item.Level + 1;
      this.idParent = item.Id;
      this.id = null;
      this.b = [...this.b, item]
    }
    this.onChange(this.b);
    this.onTouched();
    this.onClickButton.emit(this.b);
  }
}
