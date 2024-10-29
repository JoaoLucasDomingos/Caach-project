import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ModalService } from 'src/app/components/services/modal.service'; // Certifique-se de que o caminho está correto

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private modalService: ModalService) {}

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('donationChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
          label: 'Doações nos últimos 12 meses',
          data: [50, 70, 60, 90, 120, 150, 180, 170, 160, 140, 130, 110],
          backgroundColor: '#00b753',
          borderColor: '#00b753',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  openProductModal() {
    this.modalService.open(); // Chama o método para abrir o modal
  }
}
