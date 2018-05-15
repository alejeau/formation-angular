import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replaceEscaped'
})
export class ReplaceEscapedPipe implements PipeTransform {
  transform(param: string): string[] {
    return param.replace('\\n', '\n').replace('\\’', '’');
  }

}
