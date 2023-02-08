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
  b: HelpDeskModel[] = [] ;
  level:number=0;
  idParent:number|null|undefined=null;
  id:number|null|undefined=null;

  disabledSave=false;
  showBtnSave=true;
  showBtnReset=true;
  resetClicked=false;

rowData$ : Observable<HelpDeskModel[]|undefined>=this.helpDeskService.HelpDeskCollection({} as HelpDeskSearchModel);

frmOffertHeaderDetail = this.fb.group({
  DetailCollection: [''],
})




  //rowdatalevel$:Observable<HelpDeskModel[]>  = this.rowData$?.pipe(map(h=> h?.filter(h=>h.Level===this.level)))

  constructor(private router:Router, private helpDeskService:HelpdeskService, private fb:FormBuilder){
  }

  // onClickHandler(e:Event, item:HelpDeskModel){

  //   if (item.Ico==='undo'){
  //     this.level = item.Level-1;
  //     this.idParent=null;
  //     this.id=item.IdParent;
  //     this.b = this.b.slice(0,this.b.length-1)
  //     return;
  //   }
  //   this.level=item.Level+1;
  //   this.idParent = item.Id;
  //   this.id = null;

  //   this.b = [...this.b, item]
  // }

  onClickBreadItem(e:Event, item:HelpDeskModel){
    console.log('1',this.b)
    this.b=this.b.slice(0, this.b.indexOf(item))
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
    // this.level=0;
    // this.idParent=null;
    // this.id=null;
    // this.b=[];
  }

  onClickHandler(e:any, item:any){
    console.log(e);
  }

}
