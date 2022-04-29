import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.lenght === 0 || filterString === ''){
      return value;
    }

    const ComicsRecibidos = [];
    for(const Comic of value){
      if(Comic.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1){
        ComicsRecibidos.push(Comic)
      }
      if(Comic.format.toLowerCase() === filterString.toLowerCase()){
        ComicsRecibidos.push(Comic)
      }
    }
    return ComicsRecibidos;
  }

}
