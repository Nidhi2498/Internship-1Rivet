import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';


@Injectable()
export class CommonService {
 
  constructor(private http:HttpClient){}
  
  public getdata():Observable<any>
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }

}
