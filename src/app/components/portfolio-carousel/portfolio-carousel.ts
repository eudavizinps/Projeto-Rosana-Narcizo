import { Component, signal } from '@angular/core';

@Component({ selector: 'app-portfolio-carousel', templateUrl: './portfolio-carousel.html' })
export class PortfolioCarouselComponent {
  readonly activeCategory = signal('Todos');
  readonly categories = ['Todos', 'Noivas', 'Penteados', 'Maquiagem', 'Eventos'];
  readonly items = [
    { title: 'Noiva editorial', category: 'Noivas', image: 'assets/images/portfolio/noiva-perolas.jpg' },
    { title: 'Preparação', category: 'Eventos', image: 'assets/images/portfolio/preparacao.jpg' },
    { title: 'Coque clássico', category: 'Penteados', image: 'assets/images/portfolio/penteado.jpg' },
    { title: 'Beleza atemporal', category: 'Maquiagem', image: 'assets/images/hero/hero-noiva-1.jpg' },
    { title: 'Véu & luz', category: 'Noivas', image: 'assets/images/hero/hero-noiva-2.jpg' },
    { title: 'Romance moderno', category: 'Penteados', image: 'assets/images/hero/hero-noiva-3.jpg' },
  ];
  filteredItems() { return this.activeCategory() === 'Todos' ? this.items : this.items.filter((item) => item.category === this.activeCategory()); }
  scroll(direction: number): void { document.querySelector('.portfolio-track')?.scrollBy({ left: direction * 360, behavior: 'smooth' }); }
}
