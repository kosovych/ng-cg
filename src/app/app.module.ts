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
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoping-list/shopping-list.service';
import { RecipeStartComponent } from './recipte-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipte-book/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
