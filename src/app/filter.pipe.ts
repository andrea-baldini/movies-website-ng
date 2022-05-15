import { Pipe, PipeTransform } from '@angular/core';
import MovieTest from './models/MovieTest';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, searchTerm: string): MovieTest[] {

    if (!field)
      return items;

    if (!searchTerm)
      return items;

    // return items;
    return items.filter(x => x[field].toLowerCase().indexOf(searchTerm.toLowerCase().trim()) > -1);
  }

}
