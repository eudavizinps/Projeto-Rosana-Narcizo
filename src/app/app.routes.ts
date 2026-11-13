import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page';
import { ContentPageComponent } from './pages/content-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Rosana Narcizo | Maquiagem & Penteados' },
  { path: 'servicos', component: ContentPageComponent, data: { page: 'servicos' }, title: 'Serviços | Rosana Narcizo' },
  { path: 'portfolio', component: ContentPageComponent, data: { page: 'portfolio' }, title: 'Portfólio | Rosana Narcizo' },
  { path: 'noivas', component: ContentPageComponent, data: { page: 'noivas' }, title: 'Noivas | Rosana Narcizo' },
  { path: 'sobre', component: ContentPageComponent, data: { page: 'sobre' }, title: 'Sobre | Rosana Narcizo' },
  { path: 'depoimentos', component: ContentPageComponent, data: { page: 'depoimentos' }, title: 'Depoimentos | Rosana Narcizo' },
  { path: 'faq', component: ContentPageComponent, data: { page: 'faq' }, title: 'Dúvidas frequentes | Rosana Narcizo' },
  { path: 'contato', component: ContentPageComponent, data: { page: 'contato' }, title: 'Contato | Rosana Narcizo' },
  { path: '**', redirectTo: '' },
];
