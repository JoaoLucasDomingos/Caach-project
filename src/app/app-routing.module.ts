import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoadorComponent } from './components/doador/doador.component';
import { DoadorListComponent } from './components/doador-list/doador-list.component';
import { DoadorEditComponent } from './components/doador-edit/doador-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona de '' para '/login'
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doador', component: DoadorComponent },
  { path: 'doador-list', component: DoadorListComponent },
  { path: 'doador/edit/:cpf', component: DoadorEditComponent }, // Rota para edição
  // Remova a linha duplicada abaixo
  // { path: 'doador/edit/:cpf', component: DoadorEditComponent }, 
  { path: '**', redirectTo: '/login' } // Redireciona qualquer rota desconhecida para '/login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
