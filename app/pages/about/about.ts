import {Component} from '@angular/core';
import {NavController,NavParams,Page} from 'ionic-angular';
import {itemPage} from '../about/navigation-details';
import { ModalController } from 'ionic-angular';
// import { itemPage } from '../about/navigation-details';


//   presentModal() {
//     let modal = this.modalCtrl.create(ModalPage);
//     modal.present();
//   }
// }

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {


	//items = [];
	// static get parameters(){
	// 	return[[NavController]];

	// }
  constructor(public nav: NavController,public modalCtrl:ModalController) {
  	// this.items=[{"icon":1,"name":"张三","text":"10010"},
  	// {"icon":2,"name":"李四","text":"10011"},
  	// {"icon":3,"name":"王五","text":"10012"},
  	// {"icon":4,"name":"瘪三","text":"10013"},
  	// {"icon":5,"name":"傻逼","text":"10014"}
  	// ]
  }
	openModal(character) {
		// this.nav.push(itemPage,{item:item});
    let modal = this.modalCtrl.create(itemPage,character);
    modal.present();
  }
}
  // openPage(item){
  // 	this.nav.push(itemPage,{item:item});

  // }

