import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Url'
})
export class SafeUrlPipe implements PipeTransform {
  transform(value: any): any {
    return URL.createObjectURL(value);
  }
}