import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Registra os componentes necessários do Chart.js

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('donationChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar', // Tipo de gráfico (barras)
      data: {
        labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
          label: 'Doações nos últimos 12 meses',
          data: [50, 70, 60, 90, 120, 150, 180, 170, 160, 140, 130, 110], // Números genéricos para simulação
          backgroundColor: '#00b753', // Cor de fundo das barras
          borderColor: '#00b753', // Cor da borda das barras
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
}
