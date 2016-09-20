import {Component} from '@angular/core';
import {NavController,LoadingController,AlertController,ToastController,ModalController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
@Component({
	templateUrl: 'build/pages/contact/register.html'
})
export class Profile{


	static get parameters(){
		return[
		[ViewController]
		];
	}
	constructor(public viewCtrl:ViewController){
	}
	dismiss(){
		this.viewCtrl.dismiss();

	}
}
