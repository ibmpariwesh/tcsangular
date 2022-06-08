import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes=[
  {path:'about', component:AboutComponent}
]
@NgModule({//decorator
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [MymoduleModule,FormsModule, HttpClientModule,RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
