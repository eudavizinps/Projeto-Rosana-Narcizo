import { Component, computed, signal } from '@angular/core';

type PortfolioCategory = 'Noivas' | 'Penteados' | 'Maquiagem';

interface PortfolioItem {
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
}

@Component({ selector: 'app-portfolio-carousel', templateUrl: './portfolio-carousel.html' })
export class PortfolioCarouselComponent {
  readonly categories = ['Todos', 'Noivas', 'Penteados', 'Maquiagem'] as const;
  readonly activeCategory = signal<(typeof this.categories)[number]>('Todos');

  readonly items: PortfolioItem[] = [
    {
      title: 'Noiva com coroa de flores',
      category: 'Noivas',
      image: 'assets/images/portfolio/noiva-coroa-flores.webp',
      alt: 'Noiva com ondas soltas, coroa de flores e maquiagem iluminada junto à janela',
    },
    {
      title: 'Coque baixo elegante',
      category: 'Penteados',
      image: 'assets/images/portfolio/coque-baixo-elegante.webp',
      alt: 'Detalhe de coque baixo com mechas cruzadas em cabelo castanho',
    },
    {
      title: 'Maquiagem iluminada',
      category: 'Maquiagem',
      image: 'assets/images/portfolio/maquiagem-iluminada-cachos.webp',
      alt: 'Maquiagem iluminada com olhos esfumados e penteado de cachos presos',
    },
    {
      title: 'Cachos para o grande dia',
      category: 'Noivas',
      image: 'assets/images/portfolio/noiva-cachos-naturais.webp',
      alt: 'Noiva sorrindo enquanto coloca o brinco, com cachos definidos no penteado',
    },
    {
      title: 'Beleza em celebração',
      category: 'Noivas',
      image: 'assets/images/portfolio/producao-celebracao.webp',
      alt: 'Duas mulheres com maquiagem e penteados de festa, vestidas com robes rosados',
    },
    {
      title: 'Maquiagem clássica',
      category: 'Maquiagem',
      image: 'assets/images/portfolio/maquiagem-classica.webp',
      alt: 'Retrato com olhos esfumados, delineado e batom vinho',
    },
    {
      title: 'Coque com flores e pérolas',
      category: 'Penteados',
      image: 'assets/images/portfolio/coque-floral.webp',
      alt: 'Penteado preso visto de lado com flores claras, pérolas e detalhes dourados',
    },
    {
      title: 'Ondas com acessório',
      category: 'Penteados',
      image: 'assets/images/portfolio/ondas-com-acessorio.webp',
      alt: 'Ondas longas em cabelo castanho com presilha de pérolas e brilho',
    },
    {
      title: 'Noiva com coque e buquê',
      category: 'Noivas',
      image: 'assets/images/portfolio/noiva-coque-buque.webp',
      alt: 'Noiva com coque alto, véu e buquê de flores brancas',
    },
    {
      title: 'Noiva com tiara',
      category: 'Noivas',
      image: 'assets/images/portfolio/noiva-tiara.webp',
      alt: 'Noiva de vestido branco ajustando o brinco, com tiara e coque',
    },
  ];

  readonly filteredItems = computed(() =>
    this.activeCategory() === 'Todos'
      ? this.items
      : this.items.filter((item) => item.category === this.activeCategory()),
  );
}
