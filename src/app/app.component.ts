import { Component } from '@angular/core';
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

  level:number=0;
  disabledSave=true;
  showBtnSave=true;
  showBtnReset=true;

  rowData$ : Observable<HelpDeskModel[]>=this.helpDeskService.HelpDeskCollection({} as HelpDeskSearchModel);

  //rowdatalevel$:Observable<HelpDeskModel[]>  = this.rowData$?.pipe(map(h=> h?.filter(h=>h.Level===this.level)))

  constructor(private router:Router, private helpDeskService:HelpdeskService){
  }

  onClickHandler(e:Event, item:HelpDeskModel){
    console.log(item)
    this.level++;
  }

  btnSalvaOnClick(e: Event) {
    e.preventDefault();
    console.log('btnSalvaOnClick')
  }


  btnAnnullaOnClick(e: Event) {
    e.preventDefault();
    console.log('btnAnnullaOnClick')
  }

  btnResetOnClick(e: Event) {
    e.preventDefault();
    this.level=0;
  }

}
