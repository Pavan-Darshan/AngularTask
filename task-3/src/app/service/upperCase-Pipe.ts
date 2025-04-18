import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'UpperCasePipes',
    standalone :true
})

export class UpperCase implements PipeTransform{
    transform(value: any, ...args: any[]) {
    
    if(!value)
        return '';

     return value.toUpperCase();
    }
}