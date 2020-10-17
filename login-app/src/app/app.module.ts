import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-lcopvwfo.us.auth0.com',
      clientId: 'qLwBZm1GWQEu4Kzu0CGvYjuVOJVUgA2u',
      responseType: 'token id_token',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid'
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
