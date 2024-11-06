import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoadorComponent } from './components/doador/doador.component';
import { DoadorListComponent } from './components/doador-list/doador-list.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';
import { AuditoriaComponent } from './components/auditoria/auditoria.component';
import { EstoqueComponent } from './components/estoque/estoque.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DoadorComponent,
    DoadorListComponent,
    DoacaoComponent,
    SolicitacaoComponent,
    AuditoriaComponent,
    EstoqueComponent,
   

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
