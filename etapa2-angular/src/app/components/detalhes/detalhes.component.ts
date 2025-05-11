import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';


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

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(this.id).subscribe({
      next: (data) => this.post = data,
      error: () => console.error('Erro ao buscar o post')
    });
  }
}
