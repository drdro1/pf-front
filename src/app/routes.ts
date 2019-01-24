import { Routes } from '@angular/router';
import { FtHomeComponent } from './ft';
import { FioHomeComponent } from './fio';

export const appRoutes: Routes = [
  {path: 'fiohome', component: FioHomeComponent },
  {path: 'fthome', component: FtHomeComponent }
];
