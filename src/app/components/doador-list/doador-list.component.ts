import { Component } from '@angular/core';
import { Doador } from './doador.model'; // Importe o modelo

@Component({
  selector: 'app-doador-list',
  templateUrl: './doador-list.component.html',
  styleUrls: ['./doador-list.component.scss']
})
export class DoadorListComponent {
  doadores: Doador[] = []; // Use a interface Doador aqui
  filteredDoadores: Doador[] = []; // Lista filtrada de doadores
  searchTerm: string = ''; // Termo de pesquisa

  constructor() {
    // Simulação de doadores para fins de demonstração
    this.doadores = [
      { nome: 'João Silva', dataNascimento: '01/01/1990', cpf: '123.456.789-00', email: 'joao@example.com', telefone: '(11) 91234-5678', endereco: 'Rua A, 123' },
      { nome: 'Maria Oliveira', dataNascimento: '15/08/1985', cpf: '987.654.321-00', email: 'maria@example.com', telefone: '(11) 98765-4321', endereco: 'Rua B, 456' },
      { nome: 'Lucas Martins', dataNascimento: '12/04/1992', cpf: '123.456.789-10', email: 'lucas.martins@example.com', telefone: '(11) 92345-6789', endereco: 'Rua G, 456' },
      { nome: 'Fernanda Souza', dataNascimento: '28/02/1987', cpf: '987.654.321-11', email: 'fernanda.souza@example.com', telefone: '(21) 93456-7890', endereco: 'Avenida H, 789' },
      { nome: 'Eduardo Almeida', dataNascimento: '18/07/1993', cpf: '321.654.987-22', email: 'eduardo.almeida@example.com', telefone: '(31) 91234-5678', endereco: 'Rua I, 101' },
      { nome: 'Juliana Rocha', dataNascimento: '30/09/1991', cpf: '654.987.123-33', email: 'juliana.rocha@example.com', telefone: '(41) 96543-2109', endereco: 'Rua J, 202' },
      { nome: 'Tiago Costa', dataNascimento: '03/05/1984', cpf: '789.123.456-44', email: 'tiago.costa@example.com', telefone: '(51) 97543-2109', endereco: 'Avenida K, 303' }
  // Adicione mais doadores conforme necessário
    ];
    this.filteredDoadores = this.doadores; // Inicializa a lista filtrada
  }

  filterDoadores(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredDoadores = this.doadores.filter(doador =>
      doador.nome.toLowerCase().includes(term)
    );
  }

  excluirDoador(cpf: string): void {
    // Lógica para excluir doador
    this.doadores = this.doadores.filter(doador => doador.cpf !== cpf);
    this.filterDoadores(); // Atualiza a lista filtrada
  }
}
