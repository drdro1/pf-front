import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.component';

import { appRoutes } from './routes';

import { FioHomeComponent } from './fio/index';
import { FtSpecificsComponent, FtHomeComponent, FtMetricsComponent } from './ft/index';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FioHomeComponent,
    FtHomeComponent,
    FtMetricsComponent,
    FtSpecificsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
