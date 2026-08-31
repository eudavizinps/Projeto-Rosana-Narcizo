import { Component, HostListener, signal } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.html' })
export class HeaderComponent {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 28); }
  toggleMenu(): void { this.menuOpen.update((value) => !value); }
  closeMenu(): void { this.menuOpen.set(false); }
}
