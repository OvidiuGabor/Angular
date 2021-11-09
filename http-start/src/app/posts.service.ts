import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostServices{
    error = new Subject<string>();
    constructor(private http: HttpClient){}


    createAndStorePost(title:string, content:string){
        const postData: Post={
            title: title,
            content: content
        }
        this.http.post<{name: string}>('https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData,{
          observe: 'response'
        })
        .subscribe(responseData => {
          console.log(responseData)
        }, error =>{
          this.error.next(error.message)
        });
    }

    fetchPost(){
        return this.http.get<{[key:string]: Post}>("https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json",{
          headers: new HttpHeaders({
            "custom-header" : 'Hello'
          }),
          params: new HttpParams().set('print', 'pretty'),
          responseType: 'json'
          
        })
        .pipe(map(responseData => {
          const postArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key], id: key})
            }
            
          }
          return postArray;
        }),
        catchError(errorRes =>{
          //process the error
          return throwError(errorRes)
        })
        
        );

    }

    deletePosts(){
      return  this.http.delete('https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
        observe: 'events',
        responseType: 'text'
      }).pipe(tap(event => {
        console.log(event)
        if(event.type === HttpEventType.Response){
            console.log(event.body)
        }
        if(event.type === HttpEventType.Sent){
          console.log(event.type)
        }
      }));
    }

}