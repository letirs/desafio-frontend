import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-noticia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './criar-noticia.component.html',
  styleUrl: './criar-noticia.component.scss'
})
export class CriarNoticiaComponent implements OnInit {

  novaNoticia: Post = {
    id: 0,
    title: '',
    body: '',
    image: ''
  };

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  criarNoticia() {
    this.postService.criarPost(this.novaNoticia).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Erro ao criar notícia:', err)
    });
  }

}
