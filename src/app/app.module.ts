import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import {MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
  MatToolbarModule , MatDialogModule , MatCardModule ,MatProgressSpinnerModule, MatButtonModule , MatSliderModule} from '@angular/material';
//import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MatSelectModule , MatGridListModule , MatProgressSpinnerModule , MatInputModule, MatSlideToggleModule, MatDialogModule,
    MatToolbarModule, MatCardModule, MatButtonModule , MatSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
