import { Component } from '@angular/core';
import { Type, Post } from '../util/type';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router} from '@angular/router';
/**
 * display one post with all comments
 */
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ '../home/home.component.scss', './detail.component.scss']
})
export class DetailComponent {
  post: Post;
  type = Type;

  constructor(
    private postService: PostService,
    route: ActivatedRoute,
    router: Router) {
      const id = route.snapshot.params['id'];
      this.getPost(Number(id));
    }

  getPost(id: number){
    this.postService.getPost(id).subscribe( (response) => {
      this.post = response;
    }, error => {
      console.log(error.error);
    });
  }

  upvote(post: Post){
    post.rate += 1;
  }

  downvote(post: Post) {
    post.rate -= 1;
  }
}
