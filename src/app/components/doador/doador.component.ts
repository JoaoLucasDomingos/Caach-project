import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-doador',
  templateUrl: './doador.component.html', // Referência ao HTML separado
  styleUrls: ['./doador.component.scss']   // Referência ao SCSS separado
})
export class DoadorComponent {
  imgPreview: string = 'https://via.placeholder.com/150'; // Imagem padrão
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

  previewImage(event: Event): void {
    const input = event.target as HTMLInputElement; // O input que disparou o evento
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgPreview = e.target?.result as string; // Atualiza a imagem de pré-visualização
      };
      reader.readAsDataURL(input.files[0]); // Lê o arquivo como URL
    }
  }

  alterarFoto(): void {
    const fileInput = this.el.nativeElement.querySelector('#foto');
    fileInput.click(); // Simula um clique no input de arquivo
  }

  excluirFoto(): void {
    this.imgPreview = 'https://via.placeholder.com/150'; // Volta para a imagem padrão
    console.log("Excluir foto clicado.");
  }

  onSubmit(): void {
    // Aqui você pode processar o envio do formulário
    console.log(this.doador);
    // Lógica para enviar os dados para um servidor ou API pode ser adicionada aqui
  }
}
