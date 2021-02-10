import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(status: any, stat: any): any {
      if(stat=="1"){
      return status = "Active";
      }
      else{
        return status = "Inactive";
      }
    }

}
