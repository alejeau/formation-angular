import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(param: string): string[] {
    return param.split('\\n');
  }

}
