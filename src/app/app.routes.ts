import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';

export const routes: Routes = [{
    path: '',
    component: HomePage,
    data: { title: 'PSN Store' }
  }];
