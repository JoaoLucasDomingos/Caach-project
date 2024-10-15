import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doador } from './doador.model'; // Isso assume que ambos os arquivos estão na mesma pasta


@Component({
  selector: 'app-doador-edit',
  templateUrl: './doador-edit.component.html',
  styleUrls: ['./doador-edit.component.scss']
})
export class DoadorEditComponent implements OnInit {
  doador: Doador | undefined; // Doador a ser editado

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('cpf'); // Obtém o CPF da rota

    // Aqui você deve implementar a lógica para buscar o doador com o CPF informado
    // Por exemplo, se você tem um serviço que gerencia os doadores
    // this.doadorService.getDoadorByCpf(cpf).subscribe(doador => this.doador = doador);

    // Simulação de busca do doador
    this.doador = {
      nome: 'João Silva',
      dataNascimento: '1990-01-01',
      cpf: cpf || '',
      email: 'joao@example.com',
      telefone: '(11) 91234-5678',
      endereco: 'Rua A, 123'
    };
  }

  onSubmit(): void {
    // Aqui você deve implementar a lógica para salvar as alterações
    // this.doadorService.updateDoador(this.doador).subscribe(() => this.router.navigate(['/doador-list']));
  }

  cancel(): void {
    this.router.navigate(['/doador-list']);
  }
  
}
