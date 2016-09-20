import {Component} from '@angular/core';
import {NavController,LoadingController,AlertController} from 'ionic-angular';
import {ToastController,ModalController,ViewController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {Profile} from '../contact/register';
import {ImagePicker } from 'ionic-native';
import {Storage} from 'ionic-angular';
import {UserCenter} from '../contact/usercenter';
import {Http} from '@angular/http';
//import {LocalStorage} from 'ionic-angular';
// import {Http} from '@angular/http';
 
@Component({
	templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
	// static get parameters(){
	// 	return [[NavController]];
	// }



	public user={
		username : '',
		password : '',
		headface :"/images/1.jpg"
		// options :"/images/1.jpg"
	}

	constructor(public modalCtrl: ModalController,
		public loading: LoadingController,
		public alert: AlertController,
		public toast:ToastController,
		public view:ViewController,
		private http:Http) {

 
	}

	login(){

		if(this.user.username ==''){//|| this.user.username.length<=3 || this.user.password ==''
			// let alert  = this.alert.create({
			// 	title : 'sorry',
			// 	subTitle : '用户名格式不正确',
			// 	buttons : ['OK']
			// });
			// alert.present();
			let toast = this.toast.create({
				message  : '您输入的格式不正确！',
				duration : 3000,
				position : 'top'
			});
			toast.present();


		}
		else{
		//console.log(this.user.username);
		let loading = this.loading.create({
			spinner : 'crescent',
			content : "Please wait...",
			duration: 3000,
			dismissOnPageChange: true
		});
		    loading.present();


        // 这里模拟登录，如果输入的密码为1那么
        // 我们认为登录成功
		if(this.user.password=="1"){
			localStorage.setItem("username",this.user.username)
			localStorage.setItem("Logined",JSON.stringify(true));
			setTimeout(()=>{this.view.dismiss(this.user.username),
				loading.dismiss()
			},1000);
			console.log('13');
			console.log(this.user.username);
		    
		}
		else{
			let toast = this.toast.create({
				message  : '登录失败！',
				duration :  3000 ,
				position : 'top'
			});
			toast.present();

		}
		// this.http.get("http://rap.taobao.org/mockjs/5875/ionic/doLogin/"
        // + this.user.username + "/"
        // + this.user.password)
		// .subscribe(data=>{
		// 	localStorage.setItem("username",this.user.username);
		// 	localStorage.setItem("Logined",JSON.stringify(true));
		// 	loading.dismiss();
        //
		// },error=>{
		// 	let toast = this.toast.create({
		// 		message  : '登录失败！',
		// 		duration :  3000 ,
		// 		position : 'top'
		// 	});
		// 	toast.present();
        //
		// });

		}
	}

 	// 打开注册窗口
        presentProfileModal(){
        	let profileModal = this.modalCtrl.create(Profile,{userId :8675309});
        	profileModal.present();
        }

    //用户上传图片
        uploadImage(){
        	var options;
        	ImagePicker.getPictures(options).then((result) => {
        	for (var i = 0; i < result.length; i++) {
        		this.user.headface = result[i];
        	}
        })

        }
}



