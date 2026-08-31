import { Component, signal } from '@angular/core';

@Component({ selector: 'app-social-proof', templateUrl: './social-proof.html' })
export class SocialProofComponent {
  readonly openFaq = signal<number | null>(0);
  readonly testimonials = [
    ['Juliana P.', 'Noiva · demonstração', 'A equipe transformou tudo! Me senti linda, segura e acolhida do início ao fim.'],
    ['Camila S.', 'Evento · demonstração', 'Maquiagem impecável e penteado perfeito. O cuidado superou minhas expectativas.'],
    ['Fernanda L.', 'Madrinha · demonstração', 'Toque leve e natural, com muito carinho e profissionalismo.'],
  ];
  readonly faqs = [
    ['Como faço para reservar minha data?', 'Escolha o serviço e envie a sua solicitação. Nesta etapa visual, o envio é apenas demonstrativo.'],
    ['Qual é o valor do sinal?', 'O sinal demonstrado é sempre de 20% sobre o valor estimado do atendimento.'],
    ['Vocês atendem em domicílio?', 'Sim, o atendimento em domicílio faz parte da experiência apresentada. Consulte disponibilidade e região.'],
    ['Posso remarcar minha data?', 'As regras de remarcação serão definidas e publicadas antes da abertura das reservas reais.'],
    ['Vocês atendem grandes grupos?', 'Sim. A proposta inclui uma equipe coordenada para madrinhas, formandas e eventos.'],
  ];
  toggle(index: number): void { this.openFaq.set(this.openFaq() === index ? null : index); }
}
