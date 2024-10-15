import { Component, OnInit } from '@angular/core';
import { Doador } from './doador.model'; // Verifique se o caminho está correto

@Component({
  selector: 'app-doador-edit',
  templateUrl: './doador-edit.component.html',
  styleUrls: ['./doador-edit.component.scss']
})
export class DoadorEditComponent implements OnInit {
  doador: Doador; // Declare a propriedade doador

  constructor() {
    // Inicialize a propriedade doador
    this.doador = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      email: '',
      telefone: '',
      endereco: ''
    };
  }

  ngOnInit(): void {
    // Lógica para carregar dados do doador se necessário
  }

  onSubmit() {
    // Lógica para salvar o doador
    console.log(this.doador); // Para verificar se o objeto está sendo preenchido
  }

  cancel() {
    // Lógica para cancelar a edição
  }
}
