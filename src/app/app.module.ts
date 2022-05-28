import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { Design2Component } from './design2/design2.component';
import {CarouselModule} from 'primeng/carousel';
// import { SwiperModule } from "swiper/angular";
import {InputTextModule} from 'primeng/inputtext';
import { SampleComponent } from './sample/sample.component';
// import { Router } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
// import {MenuItem} from 'primeng/api';

@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    // SwiperModule,
    InputTextModule,
    MenubarModule ,
      ButtonModule


    
    // Router
  ],
  declarations: [ 
      AppComponent,
      FooterComponent,
       HeaderComponent,
       Design2Component,
      SampleComponent,
      HomeComponent,
       FeaturesComponent,
       AboutComponent,
       PricingComponent,
       ContactComponent,
       CardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule {}

module: {
  loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
  ]
  preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
  ]
}