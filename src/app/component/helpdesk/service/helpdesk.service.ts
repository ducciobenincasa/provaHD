import { environment } from 'src/environments/environment';
import { HelpDeskModel } from './../model/helpDesk.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpDeskSearchModel } from '../model/helpDesk.model';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {

  constructor(private http: HttpClient) { }

  HelpDeskCollection(hds: HelpDeskSearchModel){
    const param = new HttpParams({
      fromObject: {
        pId: hds.pId ? hds.pId.toString().trim() : '',
        pLabel: hds.pLabel ? hds.pLabel.toString().trim() : '',
        pIdParent: hds.pIdParent ? hds.pIdParent.toString().trim() : '',
        pLevel: hds.pLevel ? hds.pLevel.toString().trim() : ''
      }
    })

    return this.http.get<HelpDeskModel[]>(environment.apiUrl + 'helpdesk/HelpDeskCollection', { params: param });

  }
}
