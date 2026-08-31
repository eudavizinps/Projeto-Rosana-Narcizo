import { Component } from '@angular/core';

@Component({ selector: 'app-services-section', templateUrl: './services-section.html' })
export class ServicesSectionComponent {
  readonly services = [
    ['♙', 'Atendimento Personalizado', 'Escutamos você para criar o visual que tem a sua cara.'],
    ['✧', 'Maquiagem Profissional', 'Produtos premium e técnicas de alta durabilidade.'],
    ['♧', 'Penteados Sofisticados', 'Do clássico ao contemporâneo, cada detalhe é pensado.'],
    ['♢', 'Noivas', 'Beleza que transborda amor em um dos dias mais especiais.'],
    ['♡', 'Madrinhas', 'Harmonia e leveza em todos os ângulos.'],
    ['✺', 'Eventos', 'Formaturas, festas, ensaios e momentos especiais.'],
    ['✿', 'Equipe para Grandes Grupos', 'Excelência com atendimentos coordenados e ágeis.'],
    ['⌂', 'Atendimento VIP em Domicílio', 'Conforto, comodidade e tranquilidade onde você merece.'],
  ];
}
