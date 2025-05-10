import { Routes } from '@angular/router';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
      // rota inicial
  { path: '', component: HomeComponent },

  // rota de detalhes com parâmetro de ID
  { path: 'detalhes/:id', component: DetalhesComponent }
];

