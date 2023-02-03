import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-helpdesk',
  template: `
    <a href="#" class="card card-border flat text-center col-3">
      <fa-icon [icon]="['fas', 'database']"class="fa-2x"></fa-icon>
      <span class="strong display-block margin-top-sm">Sizing</span>
    </a>
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
  @Input() IcoName:string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
