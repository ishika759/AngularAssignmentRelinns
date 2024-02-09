

// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductCardComponent } from './product-card/product-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, CardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
