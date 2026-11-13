import { Component, ElementRef, HostListener, effect, inject, viewChild } from '@angular/core';
import { BudgetModalService } from '../../budget-modal.service';

@Component({ selector: 'app-budget-dialog', templateUrl: './budget-dialog.html' })
export class BudgetDialogComponent {
  readonly budget = inject(BudgetModalService);
  readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    effect(() => {
      if (this.budget.isOpen()) this.closeButton()?.nativeElement.focus();
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.budget.close(); }

  @HostListener('document:keydown.tab', ['$event'])
  onTab(event: Event): void {
    if (!this.budget.isOpen()) return;
    const keyboardEvent = event as KeyboardEvent;
    const dialog = this.closeButton()?.nativeElement.closest('[role="dialog"]');
    const controls = Array.from(dialog?.querySelectorAll<HTMLElement>('button, input, select, a[href]') ?? []);
    if (!controls.length) return;
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (keyboardEvent.shiftKey && document.activeElement === first) {
      keyboardEvent.preventDefault();
      last.focus();
    } else if (!keyboardEvent.shiftKey && document.activeElement === last) {
      keyboardEvent.preventDefault();
      first.focus();
    }
  }
}
