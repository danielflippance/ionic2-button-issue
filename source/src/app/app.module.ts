import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CompanyMobileApp } from './app.component';
import { MyPage } from '../pages/mypage/mypage';

@NgModule({
  declarations: [
    CompanyMobileApp,
    MyPage,
  ],
  imports: [
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
