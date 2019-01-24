import { Routes } from '@angular/router';
import { SpecificsComponent } from './ft/specifics.component';
import { MetricsComponent } from './ft/metrics.component';

export const appRoutes: Routes = [
  {path: 'specifics', component: SpecificsComponent },
  {path: 'metrics', component: MetricsComponent }
];
