import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface HeroSlide { eyebrow: string; title: string; description: string; image: string; }

@Component({ selector: 'app-hero', imports: [FormsModule], templateUrl: './hero.html' })
export class HeroComponent implements OnInit, OnDestroy {
  readonly current = signal(0);
  readonly paused = signal(false);
  private timer?: ReturnType<typeof setInterval>;
  readonly slides: HeroSlide[] = [
    { eyebrow: 'Maquiagem & penteados', title: 'Assinamos momentos de beleza inesquecíveis', description: 'Realçamos a sua essência com sofisticação, cuidado e técnica — do primeiro olhar ao último abraço.', image: 'assets/images/hero/hero-noiva-1.jpg' },
    { eyebrow: 'Beleza para noivas', title: 'Elegância que acompanha a sua história', description: 'Uma produção pensada para refletir quem você é e fazer cada fotografia atravessar o tempo.', image: 'assets/images/hero/hero-noiva-2.jpg' },
    { eyebrow: 'Atendimento exclusivo', title: 'Seu grande dia, leve e sem complicações', description: 'Planejamento, delicadeza e uma equipe atenta a cada detalhe para você viver o momento por inteiro.', image: 'assets/images/hero/hero-noiva-3.jpg' },
  ];
  ngOnInit(): void { this.timer = setInterval(() => { if (!this.paused()) this.next(); }, 5600); }
  ngOnDestroy(): void { if (this.timer) clearInterval(this.timer); }
  next(): void { this.current.update((value) => (value + 1) % this.slides.length); }
  previous(): void { this.current.update((value) => (value - 1 + this.slides.length) % this.slides.length); }
  goTo(index: number): void { this.current.set(index); }
}
