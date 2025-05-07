import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'etapa2-angular';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((dados) => {
      this.posts = dados;
    });
  }
}
