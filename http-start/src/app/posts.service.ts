import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostServices{
    constructor(private http: HttpClient){}


    createAndStorePost(title:string, content:string){
        const postData: Post={
            title: title,
            content: content
        }
        this.http.post<{name: string}>('https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
        .subscribe(responseData => {
          console.log(responseData)
        });
    }

    fetchPost(){
        return this.http.get<{[key:string]: Post}>("https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
        .pipe(map(responseData => {
          const postArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key], id: key})
            }
            
          }
          return postArray;
        }));
    }

}