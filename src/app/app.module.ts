//      ionic cordova build ios
//      ionic cordova emulate ios
//      console and livereload --> ionic cordova emulate ios -lc
//      console and livereload --> ionic cordova emulate android -lc
//      android w/ genyMotion --> ionic cordova run
//      ios physical device --> ionic cordova build ios --prod
//      debug android physical device from chrome chrome://inspect




import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { baseURL } from '../shared/baseurl';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL }
  ]
})
export class AppModule {}
