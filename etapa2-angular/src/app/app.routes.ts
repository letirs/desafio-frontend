import { Routes } from '@angular/router';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CriarNoticiaComponent } from './components/criar-noticia/criar-noticia.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'detalhes/:id',
    loadComponent: () =>
      import('./components/detalhes/detalhes.component').then((m) => m.DetalhesComponent),
  },
  {
    path: 'criar-noticia',
    loadComponent: () =>
      import('./components/criar-noticia/criar-noticia.component').then((m) => m.CriarNoticiaComponent),
  }
];


