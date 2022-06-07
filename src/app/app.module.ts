import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe
  ],
  imports: [FormsModule, HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
