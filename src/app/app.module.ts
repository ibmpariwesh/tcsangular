import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MymoduleModule } from './mymodule/mymodule.module';

@NgModule({//decorator
  declarations: [
    AppComponent
  ],
  imports: [MymoduleModule,FormsModule, HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
