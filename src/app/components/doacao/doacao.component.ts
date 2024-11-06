import { Component } from '@angular/core';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent {
  // Dados dos doadores e produtos (simulação, pode ser dinâmico)
  doadores: string[] = ['João Silva', 'Maria Oliveira', 'Carlos Souza'];
  produtos: string[] = ['Arroz', 'Feijão', 'Macarrão'];

  // Modelo de doação
  doacao = {
    doador: '',
    produto: '',
    quantidade: 1,
    data: ''
  };

  // Método de envio do formulário
  onSubmit() {
    console.log('Doação confirmada:', this.doacao);
    // Aqui você pode adicionar a lógica para enviar os dados ao backend
  }
}
