import { Routes } from '@angular/router';
import { SignalEjemplo1Component } from './components/signal-ejemplo1/signal-ejemplo1.component';
import { SignalEjemplo2Component } from './components/signal-ejemplo2/signal-ejemplo2.component';
import { SignalEjemplo3Component } from './components/signal-ejemplo3/signal-ejemplo3.component';
import { SignalEjemplo4Component } from './components/signal-ejemplo4/signal-ejemplo4.component';
import { SignalEjemplo5Component } from './components/signal-ejemplo5/signal-ejemplo5.component';
import { SignalEjemplo6Component } from './components/signal-ejemplo6/signal-ejemplo6.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signal-ejemplo1'
  },
  {
    path: 'signal-ejemplo1',
    component: SignalEjemplo1Component
  },
  {
    path: 'signal-ejemplo2',
    component: SignalEjemplo2Component
  },
  {
    path: 'signal-ejemplo3',
    component: SignalEjemplo3Component
  },
  {
    path: 'signal-ejemplo4',
    component: SignalEjemplo4Component
  },
  {
    path: 'signal-ejemplo5',
    component: SignalEjemplo5Component
  },
  {
    path: 'signal-ejemplo6',
    component: SignalEjemplo6Component
  }
];
