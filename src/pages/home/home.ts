import { Component, OnInit, Inject } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  bannerConfig: AdMobFreeBannerConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    id: 'ca-app-pub-1486506898639463/7415849695',
    //id:'ca-app-pub-3940256099942544/6300978111' /*test ad*/,
    isTesting: true,
    //bannerAtTop: true,
    autoShow: true
  };

  constructor(public navCtrl: NavController,
    private dishservice: DishProvider,
    private promotionservice: PromotionProvider,
    private leaderservice: LeaderProvider,
    private admobFree: AdMobFree,
    private toastCtrl: ToastController,
    private platform: Platform,
    @Inject('BaseURL') private BaseURL) { }  //tslint:disable-line no-unused-variable

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);

    

    this.platform.ready().then(() => {
      this.admobFree.banner.config(this.bannerConfig);
      this.admobFree.banner.prepare()
        .then(() => {
          this.toastCtrl.create({
            message: 'banner prepared',
            position: 'middle',
            duration: 3000
          }).present();
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
          console.log('banner is ready');
        })
        .catch(e => {
          this.toastCtrl.create({
            message: `banner failed to prepare ${e}`,
            position: 'middle',
            duration: 3000
          }).present();
        });
    })
  }

  fabClicked() {
    this.admobFree.banner.show().then(()=>{
    // this.admobFree.banner.hide().then(() => {
      //this.admobFree.banner.remove();
    // });
    });
    //this.admobFree.banner.remove()
  }
}