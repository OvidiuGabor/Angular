import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'reverse'
})
export class ReverseString implements PipeTransform{

    transform(value:string): string{
        if(value.length === 1){
            return value
        }

        const placeholder: string[] = [];
        for(var i = 0; i < value.length; i++){
            placeholder.push(value[i]);
        }

        return placeholder.reverse().join('')
    }
}