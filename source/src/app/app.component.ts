import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MyPage } from '../pages/mypage/mypage';

@Component({
  templateUrl: 'app.html',
})
export class CompanyMobileApp {
  rootPage = MyPage;

  //========================================================
  // constructor
  //========================================================
  constructor(private platform: Platform) {  }
}
