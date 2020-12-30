import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ppath'
})
export class PpathPipe implements PipeTransform {

  transform(pathi: string): string {
    if (pathi.trim().length===0) {
      return 'DEFAULT_IMAGE';
    }
    return pathi;
  }

}
