import { Component, inject } from '@angular/core';
import { BudgetModalService } from '../../budget-modal.service';

@Component({ selector: 'app-final-cta', templateUrl: './final-cta.html' })
export class FinalCtaComponent {
  readonly budget = inject(BudgetModalService);
}
