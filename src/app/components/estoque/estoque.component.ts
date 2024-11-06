// estoque.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {

  // Lista de itens de estoque com categorias
  estoqueItems = [
    { id: 1, descricao: 'Arroz', quantidade: 100, categoria: 'Alimentos Não Perecíveis' },
    { id: 2, descricao: 'Feijão', quantidade: 200, categoria: 'Alimentos Não Perecíveis' },
    { id: 3, descricao: 'Macarrão', quantidade: 150, categoria: 'Alimentos Não Perecíveis' },
    { id: 4, descricao: 'Óleo de soja', quantidade: 50, categoria: 'Alimentos Não Perecíveis' },
    { id: 5, descricao: 'Açúcar', quantidade: 80, categoria: 'Alimentos Não Perecíveis' },
    { id: 6, descricao: 'Laranja', quantidade: 120, categoria: 'Alimentos Perecíveis' },
    { id: 7, descricao: 'Maçã', quantidade: 90, categoria: 'Alimentos Perecíveis' },
    { id: 8, descricao: 'Leite', quantidade: 200, categoria: 'Alimentos Perecíveis' },
    { id: 9, descricao: 'Camiseta', quantidade: 50, categoria: 'Roupas' },
    { id: 10, descricao: 'Calça Jeans', quantidade: 30, categoria: 'Roupas' },
    { id: 11, descricao: 'Medicamento para dor', quantidade: 75, categoria: 'Remédios' },
    { id: 12, descricao: 'Antibiótico', quantidade: 50, categoria: 'Remédios' },
    { id: 13, descricao: 'Xarope', quantidade: 40, categoria: 'Remédios' },
  ];
}
