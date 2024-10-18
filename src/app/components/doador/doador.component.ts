import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-doador',
  templateUrl: './doador.component.html', // Referência ao HTML separado
  styleUrls: ['./doador.component.scss']   // Referência ao SCSS separado
})
export class DoadorComponent {
 
    doador: { // Definindo a propriedade 'doador' corretamente
    nome: string;
    dataNascimento: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    termos: boolean;
  } = {
    nome: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
    termos: false
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onSubmit(): void {
    // Aqui você pode processar o envio do formulário
    console.log(this.doador);
    // Lógica para enviar os dados para um servidor ou API pode ser adicionada aqui
  }
}
