import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
  count = 0;
  plun = 0;
  zan() {

    this.count++;


  }
  pl() {

    this.plun++;


  }
}
