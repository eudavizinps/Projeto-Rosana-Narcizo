import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shows the home page and navigates to the portfolio', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Assinamos momentos');
    await router.navigateByUrl('/portfolio');
    await fixture.whenStable();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Portfólio');
  });

  it('opens the budget from the header on an inner page', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/portfolio');
    await fixture.whenStable();
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('[role="dialog"]')).toBeNull();
    (page.querySelector('.header-cta') as HTMLButtonElement).click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.querySelector('[role="dialog"]')).not.toBeNull();
    (page.querySelector('.budget-close') as HTMLButtonElement).click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.querySelector('[role="dialog"]')).toBeNull();
  });
});
