import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ServicesSectionComponent } from './components/services-section/services-section';
import { ProcessSectionComponent } from './components/process-section/process-section';
import { PortfolioCarouselComponent } from './components/portfolio-carousel/portfolio-carousel';
import { AboutSectionComponent } from './components/about-section/about-section';
import { AgendaSectionComponent } from './components/agenda-section/agenda-section';
import { SocialProofComponent } from './components/social-proof/social-proof';
import { FinalCtaComponent } from './components/final-cta/final-cta';
import { FooterComponent } from './components/footer/footer';

@Component({
  imports: [HeaderComponent, HeroComponent, ServicesSectionComponent, ProcessSectionComponent, PortfolioCarouselComponent, AboutSectionComponent, AgendaSectionComponent, SocialProofComponent, FinalCtaComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
