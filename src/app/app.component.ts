import { HelpdeskService } from './component/helpdesk/service/helpdesk.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelpDeskModel, HelpDeskSearchModel } from './component/helpdesk/model/helpDesk.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prova';
  rowData$ : Observable<HelpDeskModel[] | null> | undefined;

  constructor(private router:Router, private helpDeskService:HelpdeskService){
  }
  onClickPagina1(e:any){
    e.preventDefault();
    this.rowData$ = this.helpDeskService.HelpDeskCollection({} as HelpDeskSearchModel)
  }

}
