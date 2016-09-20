import {Component} from '@angular/core';
import {NavController,LoadingController,AlertController} from 'ionic-angular';
import {ToastController,ModalController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {ImagePicker } from 'ionic-native';
import {Storage} from 'ionic-angular';
import {ContactPage} from '../contact/contact';
//import {LocalStorage} from 'ionic-angular';
// import {Http} from '@angular/http';

@Component({
	templateUrl: 'build/pages/contact/usercenter.html'
})
export class UserCenter {

	
	public user={
		username : '',
		password : '',
		headface :"/images/1.jpg"	

	}


	constructor(public modalC: ModalController,
		public loading: LoadingController,
		public alert: AlertController,
		public toast:ToastController) {
		if(localStorage.getItem('Logined')){
           //已经登录的状态，显示用户信息
           this.user.headface="/images/" + localStorage.getItem("username") + ".jpg";
           console.log('10');

       }
       else{
       	let modal = this.modalC.create(ContactPage);
       	modal.onDidDismiss(data=>{
       	this.user.headface="/images/" + data + ".jpg";
       	console.log('11');	
       	});
       	modal.present();
       }
   }




   logout(){
   	localStorage.setItem("Logined",'');
   	localStorage.setItem("username",'');
   	let modal = this.modalC.create(ContactPage);
   	modal.onDidDismiss(data=>{
   		this.user.headface="/images/" + data + ".jpg";

   		// console.log('12');

   	});
   	modal.present();
   }





}



