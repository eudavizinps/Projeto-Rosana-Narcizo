import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesSectionComponent } from '../components/services-section/services-section';
import { ProcessSectionComponent } from '../components/process-section/process-section';
import { PortfolioCarouselComponent } from '../components/portfolio-carousel/portfolio-carousel';
import { AboutSectionComponent } from '../components/about-section/about-section';
import { AgendaSectionComponent } from '../components/agenda-section/agenda-section';
import { SocialProofComponent } from '../components/social-proof/social-proof';
import { FinalCtaComponent } from '../components/final-cta/final-cta';

@Component({
  selector: 'app-content-page',
  imports: [RouterLink, ServicesSectionComponent, ProcessSectionComponent, PortfolioCarouselComponent, AboutSectionComponent, AgendaSectionComponent, SocialProofComponent, FinalCtaComponent],
  template: `
    <div class="inner-page">
      <section class="page-intro section">
        <span class="eyebrow">Rosana Narcizo · Beleza & Maquiagem</span>
        <h1>{{ headings[page].title }}</h1>
        <p>{{ headings[page].description }}</p>
      </section>
      @switch (page) {
        @case ('servicos') { <app-services-section /><app-process-section /> }
        @case ('portfolio') { <app-portfolio-carousel /> }
        @case ('noivas') {
          <section class="section bride-feature">
            <img src="assets/images/hero/hero-noiva-2.jpg" alt="Produção de beleza para noiva" />
            <div><span class="eyebrow">Beleza para noivas</span><h2>Um visual pensado para o seu momento</h2><p>Maquiagem e penteado com atenção à sua essência, ao estilo da celebração e aos detalhes que importam para você.</p><a routerLink="/contato" class="button">Conversar sobre minha data</a></div>
          </section>
          <app-process-section />
        }
        @case ('sobre') { <app-about-section /><app-agenda-section /> }
        @case ('depoimentos') { <app-social-proof [showFaq]="false" /> }
        @case ('faq') { <app-social-proof [showTestimonials]="false" /> }
        @case ('contato') {
          <section class="section contact-page">
            <div class="contact-panel"><span class="eyebrow">Fale com a equipe</span><h2>Vamos planejar seu momento?</h2><p>Conte o serviço desejado, a data e o local do evento. O atendimento continua pelo WhatsApp.</p><a class="button" href="https://wa.me/5511979989790?text=Olá!%20Gostaria%20de%20conversar%20sobre%20uma%20produção%20de%20beleza." target="_blank" rel="noopener noreferrer">Conversar no WhatsApp ↗</a></div>
            <div class="contact-panel"><span class="eyebrow">Antes de escrever</span><h2>Informações úteis</h2><p>Disponibilidade, valores finais e condições de reserva são confirmados diretamente com a equipe.</p><a routerLink="/faq" class="text-link">Ver dúvidas frequentes →</a></div>
          </section>
        }
      }
      @if (page !== 'contato') { <app-final-cta /> }
    </div>
  `,
})
export class ContentPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly page = this.route.snapshot.data['page'] as keyof typeof this.headings;
  readonly headings = {
    servicos: { title: 'Serviços e diferenciais', description: 'Uma experiência de beleza planejada com cuidado, do primeiro contato ao dia do evento.' },
    portfolio: { title: 'Portfólio', description: 'Produções de maquiagem e penteados para momentos que merecem ser lembrados.' },
    noivas: { title: 'Beleza para noivas', description: 'Um atendimento pensado para acompanhar a sua história com leveza e sofisticação.' },
    sobre: { title: 'Conheça Rosana Narcizo', description: 'Escuta, técnica e presença em cada produção de beleza.' },
    depoimentos: { title: 'Depoimentos', description: 'Veja como a experiência é apresentada nesta etapa demonstrativa do site.' },
    faq: { title: 'Dúvidas frequentes', description: 'Respostas para ajudar você a entender o atendimento e a reserva.' },
    contato: { title: 'Entre em contato', description: 'Estamos prontas para ouvir o que você imagina para seu momento.' },
  };
}
