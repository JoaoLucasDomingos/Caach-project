import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecionar para login na raiz
  { path: 'login', component: LoginComponent }, // Definir a rota de login
  { path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
