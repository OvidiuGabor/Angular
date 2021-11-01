import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{

    transform(value: any, sortIndex: string): any{
        if(sortIndex.length === 0){
            return value;
        }

        const newValues= [];
        const arrayToSort = [];
        for(var i = 0; i< value.length; i++){
            arrayToSort.push(value[i].name);
        }

        var newArray = arrayToSort.sort();
        console.log(newArray)
        for(var i = 0; i < newArray.length; i++){
           for(var j = 0; j < value.length; j++){
                if(newArray[i] === value[j].name){
                    newValues.push(value[j]);
                }
           }
        }

        return newValues;
    }
}