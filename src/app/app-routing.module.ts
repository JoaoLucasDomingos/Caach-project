import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoadorComponent } from './components/doador/doador.component';
import { DoadorListComponent } from './components/doador-list/doador-list.component';
import { DoadorEditComponent } from './components/doador-edit/doador-edit.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';
import { AuditoriaComponent } from './components/auditoria/auditoria.component';
import { EstoqueComponent } from './components/estoque/estoque.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doador', component: DoadorComponent },
  { path: 'doador-list', component: DoadorListComponent },
  { path: 'doador/edit/:cpf', component: DoadorEditComponent },
  { path: 'produto', component: ProdutoComponent },  
  { path: 'doacao', component: DoacaoComponent },
  { path: 'solicitacao', component: SolicitacaoComponent },
  { path: 'auditoria', component: AuditoriaComponent },
  { path: 'estoque', component: EstoqueComponent },

  { path: '**', redirectTo: '/login' }, //Sempre deixar este para o ultimo
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
