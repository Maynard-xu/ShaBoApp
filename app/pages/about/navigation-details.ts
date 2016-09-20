import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/about/navigation-details.html'
})
export class itemPage {
	item;
	static get parameters(){
		return [[NavParams]];
	}
	constructor(params:NavParams){
		this.item = params.data.item;
	}

}