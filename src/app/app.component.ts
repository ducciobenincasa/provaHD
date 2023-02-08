import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelpDeskModel, HelpDeskSearchModel } from './component/helpdesk/model/helpDesk.model';
import { HelpdeskService } from './component/helpdesk/service/helpdesk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'prova';
  b: HelpDeskModel[] = [];

  disabledSave = false;
  showBtnSave = true;
  showBtnReset = true;
  resetClicked = false;

  rowData$: Observable<HelpDeskModel[] | undefined> = this.helpDeskService.HelpDeskCollection({} as HelpDeskSearchModel);

  frmOffertHeaderDetail = this.fb.group({
    control: [''],
  })




  //rowdatalevel$:Observable<HelpDeskModel[]>  = this.rowData$?.pipe(map(h=> h?.filter(h=>h.Level===this.level)))

  constructor(private router: Router, private helpDeskService: HelpdeskService, private fb: FormBuilder) {
  }


  onClickBreadItem(e: Event, item: HelpDeskModel) {
    this.frmOffertHeaderDetail.controls.control.setValue(item);
  }

  btnSalvaOnClick(e: Event) {
    e.preventDefault();
    console.log('btnSalvaOnClick', this.frmOffertHeaderDetail.getRawValue())
  }


  btnAnnullaOnClick(e: Event) {
    e.preventDefault();
  }

  btnResetOnClick(e: Event) {
    e.preventDefault();
    this.resetClicked = true;
  }

  onClickHandler(e: any, item: any) {
    console.log(e);
  }

  onClickBtnHd(e: HelpDeskModel[]) {
    this.b = [...e];
  }
}
