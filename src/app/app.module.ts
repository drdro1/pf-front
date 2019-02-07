import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRoutes } from './routes';

import { FioHomeComponent } from './fio/index';
import { FtHomeComponent, FtPortfolioComponent, FtSearchComponent } from './ft/index';
import { FundsService } from './ft/shared/funds.service';
import { TradeScreenComponent } from './ft/trade-screen/trade-screen.component';
import { FormsModule } from '@angular/forms';
import { RestService } from './ft/shared/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FioHomeComponent,
    FtHomeComponent,
    FtPortfolioComponent,
    FtSearchComponent,
    TradeScreenComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    FundsService,
    RestService
  ],
  bootstrap: [AppComponent],

  entryComponents: [
    TradeScreenComponent
  ]
})
export class AppModule { }
