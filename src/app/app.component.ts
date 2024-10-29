import { Component } from '@angular/core';
import { ModalService } from './components/services/modal.service'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-caach';

  constructor(private modalService: ModalService) {}

  // Método para salvar o produto
  saveProduct() {
    // Lógica para salvar o produto
    console.log("Produto salvo!"); // Exemplo de log para teste
    this.modalService.close(); // Fecha o modal após salvar
  }
}
