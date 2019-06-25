import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipteListComponent } from './recipte-book/recipte-list/recipte-list.component';
import { ShopingSistComponent } from './shoping-list/shoping-list.component';
import { RecipteDetailsComponent } from './recipte-book/recipte-details/recipte-details.component';
import { RecipteBookComponent } from './recipte-book/recipte-book.component';
import { RecipeStartComponent } from './recipte-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipte-book/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipteBookComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipteDetailsComponent},
    { path: ':id/edit', component: RecipeEditComponent},
  ]},
  {path: 'shoping-list', component: ShopingSistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
