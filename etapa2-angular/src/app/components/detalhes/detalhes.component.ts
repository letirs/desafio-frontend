import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';


@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  id!: number;
  post: any;

  posts: Post[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      
      this.postService.getPostById(this.id).subscribe({
        next: (data) => {
          this.post = data;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: () => console.error('Erro ao buscar o post')
      });
  
      this.postService.getPosts().subscribe({
        next: (data) => {
          const outrosPosts = data.filter(p => p.id !== this.id);
          this.posts = outrosPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
        },
        error: () => console.error('Erro ao buscar os demais posts')
      });
    });
  }
  
}
