import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Type, Post } from '../util/type';
import { DATA } from '../util/mock_data';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return of(DATA);
  }

  getPost(id: number): Observable<Post> {
    return of(DATA.filter( item => item.id === id )[0]);
  }

}
