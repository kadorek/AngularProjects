import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText : string):Product[] {
    //throw new Error('Method not implemented.');
    filterText=filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((p:Product)=>p.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
