import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doador } from 'src/app/components/doador/doador.model'; // Importa a interface Doador
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doador-edit',
  templateUrl: './doador-edit.component.html',
  styleUrls: ['./doador-edit.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class DoadorEditComponent implements OnInit {
  doador: Doador = {
    nome: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('cpf');
    if (cpf) {
      this.loadDoadorData(cpf);
    }
  }

  loadDoadorData(cpf: string): void {
    // Aqui você deve buscar os dados do doador de algum serviço ou API
    // Para simulação, vou usar um objeto fictício.
    const doadores = [
      { cpf: '123.456.789-00', nome: 'João Silva', dataNascimento: '1990-01-01', email: 'joao@example.com', telefone: '123456789', endereco: 'Rua A, 123' },
      { cpf: '987.654.321-00', nome: 'Maria Souza', dataNascimento: '1992-02-02', email: 'maria@example.com', telefone: '987654321', endereco: 'Rua B, 456' },
      // Adicione mais doadores conforme necessário
    ];

    const doadorEncontrado = doadores.find(d => d.cpf === cpf);
    if (doadorEncontrado) {
      this.doador = { ...doadorEncontrado }; // Carrega os dados do doador
    } else {
      alert('Doador não encontrado!');
    }
  }

  onSubmit(): void {
    console.log('Dados do doador atualizados:', this.doador);
    alert('Simulação: Dados do doador atualizados com sucesso!');
  }
}
