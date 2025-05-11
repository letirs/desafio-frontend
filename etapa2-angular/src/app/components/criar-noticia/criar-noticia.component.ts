import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostCriacao } from '../../models/post';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-criar-noticia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './criar-noticia.component.html',
  styleUrl: './criar-noticia.component.scss'
})
export class CriarNoticiaComponent implements OnInit {

  novaNoticia: PostCriacao = {
    title: '',
    body: '',
    image: ''
  };

  formFoiSubmetido = false; 

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  criarNoticia() {
    this.formFoiSubmetido = true;

    if (!this.novaNoticia.title || !this.novaNoticia.body || !this.novaNoticia.image) {
      return; 
    }

    this.postService.criarPost(this.novaNoticia).subscribe({
      next: (noticiaCriada) => this.router.navigate(['/detalhes', noticiaCriada.id]),
      error: (err) => console.error('Erro ao criar notícia:', err)
    });
  }

}
