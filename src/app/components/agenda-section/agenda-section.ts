import { Component } from '@angular/core';

@Component({ selector: 'app-agenda-section', templateUrl: './agenda-section.html' })
export class AgendaSectionComponent {
  readonly days = [
    { day: '19 Qui', events: [['09:00', 'Noiva · Juliana'], ['14:00', 'Madrinha · Carla']] },
    { day: '20 Sex', events: [['08:00', 'Formatura · Beatriz'], ['13:00', 'Penteado · Fernanda']] },
    { day: '21 Sáb', events: [['07:30', 'Noiva · Mariana'], ['12:00', 'Maquiagem · Livia']] },
    { day: '22 Dom', events: [['10:00', 'Ensaio · Camila']] },
  ];
}
