import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DoadorComponent } from './components/doador/doador.component';
import { DoadorListComponent } from './components/doador-list/doador-list.component';
import { DoadorEditComponent } from './components/doador-edit/doador-edit.component'; // standalone
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DoadorComponent,
    DoadorListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DoadorEditComponent, // importar o componente standalone aqui
    RouterModule.forRoot([]) // Definir as rotas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
