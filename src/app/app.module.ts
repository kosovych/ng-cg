import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { RecipteBookComponent } from './app/recipte-book/recipte-book.component';
import { ShopingEditComponent } from './app/shoping-list/shoping-edit/shoping-edit.component';
import { RecipteListComponent } from './app/recipte-book/recipte-list/recipte-list.component';
import { RecipteItemComponent } from './app/recipte-book/recipte-list/recipte-item/recipte-item.component';
import { RecipteDetailsComponent } from './app/recipte-book/recipte-details/recipte-details.component';
import { ShopingSistComponent } from './app/shoping-list/shoping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipteBookComponent,
    ShopingEditComponent,
    RecipteItemComponent,
    RecipteListComponent,
    RecipteDetailsComponent,
    ShopingSistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
