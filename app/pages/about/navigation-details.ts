import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, Platform} from 'ionic-angular';
// import {ViewController} from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/about/navigation-details.html'
})
export class itemPage {
	character;
	// static get parameters(){
	// 	return[
	// 	[ViewController]
	// 	];
	// }
	constructor(
		public viewCtrl: ViewController,
		public params: NavParams,
		public platform: Platform) {
		var characters = [
			{
				name: 'Gollum',
				quote: 'Sneaky little hobbitses!',
				image: 'img/avatar-gollum.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'River Folk' },
					{ title: 'Alter Ego', note: 'Smeagol' }
				]
			},
			{
				name: 'Frodo',
				quote: 'Go back, Sam! I\'m going to Mordor alone!',
				image: 'img/avatar-frodo.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'Shire Folk' },
					{ title: 'Weapon', note: 'Sting' }
				]
			},
			{
				name: 'Samwise Gamgee',
				quote: 'What we need is a few good taters.',
				image: 'img/avatar-samwise.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'Shire Folk' },
					{ title: 'Nickname', note: 'Sam' }
				]
			}
		];
		this.character = characters[this.params.get('charNum')];

	}
	dismiss() {
		this.viewCtrl.dismiss();

	}
	item;

	// constructor(public viewCtrl:ViewController){
	// }
	// dismiss(){
	// 	this.viewCtrl.dismiss();

	// }
	// static get parameters(){
	// 	return [[NavParams],[ViewController]];
	// }
	// constructor(params:NavParams){
	// 	this.item = params.data.item;
	// }

}