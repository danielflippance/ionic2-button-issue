import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html'
})
export class MyPage {

  //========================================================
  // Constructor
  //========================================================
  constructor(public platform: Platform) {
  }

  //========================================================
  // iframeBack
  //========================================================
  handleClick() {
    alert('Button was clicked...');
  }

}
