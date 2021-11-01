import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Post } from './post.model';
import { PostServices } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostServices) {}

  ngOnInit() {
      this.isFetching = true
      this.postService.fetchPost().subscribe(posts =>{
      this.isFetching = false
      this.loadedPosts = posts
    });

  }

  onCreatePost(postData:Post) {
    // Send Http request
    // console.log(postData);
    // this.http.post<{name: string}>('https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
    // .subscribe(responseData => {
    //   console.log(responseData)
    // });

    this.postService.createAndStorePost(postData.title, postData.content)

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts =>{
      this.isFetching = false
      this.loadedPosts = posts
    });
  }

  onClearPosts() {
    // Send Http request
  }

  // private fetchPosts(){
  //   this.isFetching = true;
  //   this.http.get<{[key:string]: Post}>("https://learning-angular-4ea54-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
  //   .pipe(map(responseData => {
  //     const postArray: Post[] = [];
  //     for(const key in responseData){
  //       if(responseData.hasOwnProperty(key)){
  //         postArray.push({...responseData[key], id: key})
  //       }
        
  //     }
  //     return postArray;
  //   })).subscribe(posts => {
  //     this.isFetching = false;
  //     this.loadedPosts = posts
  //   });
  // }


}
