import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.component';

import { appRoutes } from './routes';
import { SpecificsComponent } from './ft/specifics.component';
import { MetricsComponent } from './ft/metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpecificsComponent,
    MetricsComponent
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
