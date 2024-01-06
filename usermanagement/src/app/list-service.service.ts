import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { list } from 'src/list.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
baseUrl:string='http://localhost:3000/users'

  constructor(private http:HttpClient) { }
 getUserData():Observable<list[]>{
  return this.http.get<list[]>(this.baseUrl)
 }
 deleteUserData(id:number):Observable<list[]>{
  return this.http.delete<list[]>(`${this.baseUrl}/${id}`)
 }
 getUserDataById(id:number){
return this.http.get(`${this.baseUrl}/${id}`)
 }
 Updatedata(id:number,data:any){
  return this.http.put(`${this.baseUrl}/${id}`,data)
 }
 addData(data:any){
  return this.http.post(`${this.baseUrl}`,data)
 }
}