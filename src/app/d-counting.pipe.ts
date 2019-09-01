import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dCounting'
})
export class DCountingPipe implements PipeTransform {

  
  transform(value: any): number {
    let dayHour:Date =  new Date();
    let day:any =  new Date(dayHour.getFullYear(), dayHour.getMonth(),dayHour.getDate());
    var sub= Math.abs(value - day);
    const SInD=86400;
    var subSec=sub*0.001;
    var results = subSec/SInD;
    
    if (results >= 1 && value > day){
      return results
    }
    else{
      return results;
    }
  }
}

// export class BoldPipe implements PipeTransform {
//   transform(value: string): string {
//     if (value === null) return;
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   }
//   }
