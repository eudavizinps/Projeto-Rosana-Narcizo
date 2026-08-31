import { Component } from '@angular/core';

@Component({ selector: 'app-process-section', templateUrl: './process-section.html' })
export class ProcessSectionComponent {
  readonly steps = [
    ['01', 'Orçamento pelo site ou WhatsApp', 'Você conta o que imagina e recebe nosso primeiro direcionamento.'],
    ['02', 'Escolha da data e serviço', 'Verificamos a disponibilidade para você com muito carinho.'],
    ['03', 'Pagamento do sinal de 20%', 'Sua data fica reservada com segurança.'],
    ['04', 'Confirmação do seu momento', 'Você recebe todos os detalhes com clareza.'],
    ['05', 'Sincronização com agenda', 'O compromisso aparece na agenda da equipe.'],
  ];
}
