import { HelpDeskModel } from './component/helpdesk/model/helpDesk.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonfilter'
})
export class ButtonfilterPipe implements PipeTransform {


  transform(value: HelpDeskModel[], term: number): any {
    const filterLevel = (e: HelpDeskModel): boolean => e.Level===term;
    // if (!value) return null;
    // if (!term) return value

    return value.filter(filterLevel);
  }

}
