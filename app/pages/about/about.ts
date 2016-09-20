import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {itemPage} from '../about/navigation-details';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
	items = [];
	// static get parameters(){
	// 	return[[NavController]];

	// }
  constructor(public nav: NavController) {
  	this.items=[{"icon":1,"name":"张三","text":"10010"},
  	{"icon":2,"name":"李四","text":"10011"},
  	{"icon":3,"name":"王五","text":"10012"},
  	{"icon":4,"name":"瘪三","text":"10013"},
  	{"icon":5,"name":"傻逼","text":"10014"}
  	]
  }
  openPage(item){
  	this.nav.push(itemPage,{item:item});

  }
}
