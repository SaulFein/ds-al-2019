import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'array-indexing',
    loadComponent: () =>
      import('./array-indexing/array-indexing.component').then(
        (m) => m.ArrayIndexingComponent
      ),
  },
  {
    path: 'accumulator-variables',
    loadComponent: () =>
      import('./accumulator-variables/accumulator-variables.component').then(
        (m) => m.AccumulatorVariablesComponent
      ),
  },
  {
    path: '',
    redirectTo: 'array-indexing',
    pathMatch: 'full',
  },
];
