// auditoria.component.ts
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})
export class AuditoriaComponent {

  // Exemplo de dados de solicitações
  solicitacoes = [
    { id: 1, nome: 'João Silva', cpf: '123.456.789-00', pedido: 'Alimentos', dataSolicitacao: '2024-11-01' },
    { id: 2, nome: 'Maria Oliveira', cpf: '987.654.321-00', pedido: 'Roupas', dataSolicitacao: '2024-11-02' },
    { id: 3, nome: 'Carlos Souza', cpf: '321.654.987-00', pedido: 'Remédios', dataSolicitacao: '2024-11-03' },
    { id: 4, nome: 'Luciana Pereira', cpf: '159.753.486-11', pedido: 'Materiais de Limpeza', dataSolicitacao: '2024-11-04' },
    { id: 5, nome: 'Ricardo Almeida', cpf: '654.123.987-22', pedido: 'Brinquedos', dataSolicitacao: '2024-11-05' },
    { id: 6, nome: 'Patrícia Costa', cpf: '987.321.654-33', pedido: 'Medicamentos', dataSolicitacao: '2024-11-06' },
    { id: 7, nome: 'Felipe Santos', cpf: '654.987.321-44', pedido: 'Roupas de Cama', dataSolicitacao: '2024-11-07' },
    { id: 8, nome: 'Aline Oliveira', cpf: '123.987.654-55', pedido: 'Alimentos Não Perecíveis', dataSolicitacao: '2024-11-08' }
    // Outros dados podem ser adicionados aqui
  ];

  // Função para aprovar a solicitação
  approve(solicitacao: any) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você deseja aprovar a solicitação de ${solicitacao.nome}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, aprovar!',
      cancelButtonText: 'Não, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Aprovado!',
          `A solicitação de ${solicitacao.nome} foi aprovada.`,
          'success'
        );
        // Aqui você pode adicionar lógica para marcar como aprovado ou enviar a aprovação ao servidor
      }
    });
  }

  // Função para desaprovar a solicitação
  reject(solicitacao: any) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você deseja desaprovar a solicitação de ${solicitacao.nome}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, desaprovar!',
      cancelButtonText: 'Não, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Desaprovado!',
          `A solicitação de ${solicitacao.nome} foi desaprovada.`,
          'error'
        );
        // Aqui você pode adicionar lógica para marcar como desaprovado ou enviar a desaprovação ao servidor
      }
    });
  }
}
