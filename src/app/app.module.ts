import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {baseURL} from './shared/baseurl';
//import { MaterialModule } from './material.module';
import {MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
  MatToolbarModule , MatDialogModule , MatCardModule ,MatProgressSpinnerModule, MatButtonModule , MatSliderModule,
  MatIconModule, MatMenuModule


} from '@angular/material';
//import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// Application  Services

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import {ProcessHttpMsgService} from './services/process-httpmsg.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MatSelectModule , MatGridListModule , MatProgressSpinnerModule , MatInputModule, MatSlideToggleModule, MatDialogModule,
    MatToolbarModule, MatCardModule, MatButtonModule , MatSliderModule,MatIconModule, MatMenuModule,
    AppRoutingModule,    ReactiveFormsModule
    
  ],
  // exports: [
  //   MatButtonModule,
  //   MatToolbarModule,
  //   MatCardModule,
  //   MatIconModule, 
  //   MatMenuModule
  //   ],
  providers: [ DishService,
    PromotionService,
    LeaderService, 
    {provide: 'BaseURL',useValue: baseURL},
    ProcessHttpMsgService 
    ],
    
  entryComponents:[ LoginComponent],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
