import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipteListComponent } from './recipte-book/recipte-list/recipte-list.component';
import { ShopingSistComponent } from './shoping-list/shoping-list.component';
import { RecipteDetailsComponent } from './recipte-book/recipte-details/recipte-details.component';
import { RecipteBookComponent } from './recipte-book/recipte-book.component';

const routes: Routes = [
  {path: 'recipes', component: RecipteBookComponent, children: [
    { path: ':id', component: RecipteDetailsComponent}
  ]},
  {path: 'shoping-list', component: ShopingSistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
