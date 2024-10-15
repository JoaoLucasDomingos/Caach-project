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
