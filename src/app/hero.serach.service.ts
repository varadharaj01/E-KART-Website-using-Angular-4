
    import {Pipe, PipeTransform} from '@angular/core';
 
    @Pipe({name: 'category'})
    export class CategoryPipe implements PipeTransform {
      transform(categories: any, searchText: any): any {
         if(searchText == null ||searchText == 0) return null;

        return categories.filter(function(category:any){
          return category.name.indexOf(searchText.toLowerCase()) > -1;
        })
      }
     
        
    }
        @Pipe({name: 'category2'})
        export class CategoryPipe2 implements PipeTransform {
      transform(categories: any, selected_id: any): any {
         if(selected_id == null ||selected_id == 0) return null;

        return categories.filter(
         function(category:any){
          return category.id==parseInt(selected_id);
        }) 
    }
  }
