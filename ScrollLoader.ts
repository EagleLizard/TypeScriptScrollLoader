
import { fakeHttpRequest } from './fakeHttpService';

export class ScrollLoader {
  
  offset:number;
  limit:number;
  
  done:boolean;
  
  constructor(_limit:number){
    this.offset = 0;
    this.limit = _limit;
  }
  
  next():Promise<any>{
    this.offset += this.limit;
    return fakeHttpRequest(this.offset, this.limit).then((results:any)=>{
      this.done = !results.data.length;
      return{
        value: results.data,
        done: this.done
      };
    });
  }
  
}