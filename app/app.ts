import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Geolocation} from 'ionic-native';
import {LocalNotifications} from 'ionic-native';
import {App, NavController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
// @Component({
//   template: '<ion-nav [root]="rootPage"></ion-nav>',
  
// })
// export class MyApp {
//   static get parameters(){
//     return[[Platform]];
//   }

//   private rootPage: any;

//   constructor(private platform: Platform) {
//     this.rootPage = TabsPage;

//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();

//       //获取位置信息
//       // Geolocation.getCurrentPosition().then((resp)=>{
//       //   console.log(resp.coords.latitude);
//       //   console.log(resp.coords.longitude);
//       // })

//       //通知栏
//       LocalNotifications.schedule({
//         // id: 1,
//         text: 'Single Notification',
//         at: new Date(new Date().getTime() + 10000),
//         sound : null
//         // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
//       });


//     });
//   }
// }

// ionicBootstrap(MyApp);
@Component({
  template: '<ion-nav #rootNavController [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>'
})
export class MyApp {
  @ViewChild('rootNavController') nav: NavController;
  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //退出按钮重写******开始******
      document.addEventListener('backbutton', () => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;

        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            console.log('检测到在根视图点击了返回按钮。');
            return platform.exitApp();
          }
          console.log('检测到在子路径中点击了返回按钮。');
          return this.nav.pop();
        }

        let tabs = page.tabs;
        let activeNav = tabs.getSelected();

        if (!activeNav.canGoBack()) {
          console.log('检测到在 tab 页面的顶层点击了返回按钮。');
          return platform.exitApp();
        }

        console.log('检测到当前 tab 弹出层的情况下点击了返回按钮。');
        return activeNav.pop();

      }, false);

      //退出按钮重写******结束******
    });
  }
}

ionicBootstrap(MyApp);
