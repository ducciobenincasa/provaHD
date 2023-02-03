import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-button-helpdesk',
  template: `
    <div>
      <a href="#" class="card card-border flat text-center" (click)="onClickHandler($event)">
        <fa-icon [icon]="IcoName" class="fa-2x"></fa-icon>
        <span class="strong display-block margin-top-sm">{{Label}}</span>
      </a>
    </div>
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
export class ButtonHelpdeskComponent implements OnInit {
  @Input() IcoName:IconProp = ['fas', 'download']
  @Input() Label:string|undefined=''

  @Output() onCliCkButton:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(e:any){
    this.onCliCkButton.emit(e);
  }
}
