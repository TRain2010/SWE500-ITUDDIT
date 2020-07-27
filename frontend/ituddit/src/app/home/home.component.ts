import { Component, OnInit } from '@angular/core';
import { Type, Post } from '../util/type';
import { PostService } from '../services/post.service';
import { Router} from '@angular/router';

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

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe( (response: Post[]) => {
      this.dataList = response;
    }, error => {
      console.log(error.error);
    });
  }

  openDetail(postId: number) {
    this.router.navigate([`/post/${postId}`]);
  }

  upvote(post: Post){
    post.rate += 1;
  }

  downvote(post: Post) {
    post.rate -= 1;
  }

}
