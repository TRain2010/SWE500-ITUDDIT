import { Component, OnInit } from '@angular/core';
import { Type, Post } from '../util/type';
import { DATA } from '../util/mock_data';
import { PostService } from '../services/post.service';

const CATEGORY = ['student', 'event', 'group', 'course'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  category: string[] = CATEGORY;
  dataList: Post[] = [];
  type = Type;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe( (response: Post[]) => {
      this.dataList = response;
    }, error => {
      console.log(error);
    });
   }
}
