import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BudgetModalService {
  readonly isOpen = signal(false);
  private previousFocus: HTMLElement | null = null;
  open(): void {
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen.set(true);
  }
  close(): void {
    if (!this.isOpen()) return;
    this.isOpen.set(false);
    queueMicrotask(() => this.previousFocus?.focus());
  }
}
