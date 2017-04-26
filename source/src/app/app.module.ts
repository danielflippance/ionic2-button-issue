import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CompanyMobileApp } from './app.component';
import { MyPage } from '../pages/mypage/mypage';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CompanyMobileApp,
    MyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CompanyMobileApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyPage,
  ],

  //Globally accessible services
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {}
