import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../components/hero/hero';
import { ServicesSectionComponent } from '../components/services-section/services-section';
import { ProcessSectionComponent } from '../components/process-section/process-section';
import { FinalCtaComponent } from '../components/final-cta/final-cta';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, HeroComponent, ServicesSectionComponent, ProcessSectionComponent, FinalCtaComponent],
  template: `
    <app-hero />
    <app-services-section />
    <app-process-section />
    <section class="section home-discover">
      <div><span class="eyebrow">Conheça nosso trabalho</span><h2>Beleza que conta a sua história</h2><p>Explore produções, conheça Rosana e descubra como planejamos cada atendimento.</p></div>
      <a routerLink="/portfolio" class="button">Ver portfólio <span aria-hidden="true">→</span></a>
    </section>
    <app-final-cta />
  `,
})
export class HomePageComponent {}
