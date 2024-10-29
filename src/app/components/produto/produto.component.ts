import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/services/modal.service';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor(private modalService: ModalService, private router: Router) {}

  ngOnInit() {
    // Abre o modal assim que o componente é inicializado
    this.openModal(); // Chame esta função para abrir o modal
  }

  openModal() {
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show(); // Mostra o modal
    }
  }

  closeModal() {
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide(); // Esconde o modal
      }
    }
    this.router.navigate(['/home']); // Redireciona para a home ao fechar
  }

  saveProduct() {
    // Lógica para salvar o produto
    console.log("Produto salvo!"); // Exemplo de log
    this.closeModal(); // Fecha o modal
    // O redirecionamento já é feito no closeModal
  }
}
