import { HelpDeskModel } from './component/helpdesk/model/helpDesk.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonfilter'
})
export class ButtonfilterPipe implements PipeTransform {


  transform(value: HelpDeskModel[], term: number, idParent: number|null|undefined, id: number|null|undefined): any {

    const filterLevel = (e: HelpDeskModel): boolean => e.Level===term;
    // const filterIdParent = (e: HelpDeskModel): boolean =>  e.IdParent===idParent;
    const filterIdParent = function(e: HelpDeskModel) { return idParent ? e.IdParent===idParent:true;}
    // const filterId = (e: HelpDeskModel): boolean =>  e.Id===id;
    const filterId = function(e: HelpDeskModel) { return id ? e.Id===id:true;}

    const filterHelpDesk = (e: any): boolean => filterLevel(e) && filterIdParent(e) && filterId(e);
    // if (!value) return null;
    // if (!term) return value

    let result = value && value.filter(filterHelpDesk) ;
    if (id){
      id = null;
      idParent = result[0].IdParent;
      result = value && value.filter(filterHelpDesk) ;
    }
    return result
  }

}


