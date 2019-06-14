import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipteBookComponent } from './recipte-book/recipte-book.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { RecipteListComponent } from './recipte-book/recipte-list/recipte-list.component';
import { RecipteItemComponent } from './recipte-book/recipte-list/recipte-item/recipte-item.component';
import { RecipteDetailsComponent } from './recipte-book/recipte-details/recipte-details.component';
import { ShopingSistComponent } from './shoping-list/shoping-list.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
