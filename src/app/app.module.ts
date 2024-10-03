import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';  // Importa o componente de login
import { HomeComponent } from './components/home/home.component';    // Importa o componente home

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent  // Declara os componentes utilizados
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Importa o módulo de roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente raiz da aplicação
})
export class AppModule { }
