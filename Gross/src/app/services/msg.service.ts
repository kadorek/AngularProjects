import { Injectable } from '@angular/core';

declare let alertify:any;


// @Injectable({
//   providedIn: 'root'
// })
export class MsgService {

  constructor() { }

  Success(message:string){
    alertify.success(message);
  }


}
