import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { BudgetDialogComponent } from './components/budget-dialog/budget-dialog';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BudgetDialogComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
