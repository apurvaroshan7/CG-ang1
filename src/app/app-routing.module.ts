import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  { path: 'menulist', component: MenuComponent },
  { path: 'restlist', component: RestaurantComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'addmenu', component: AddMenuComponent },
  { path: 'addrest', component: AddRestaurantComponent },
  { path: 'restmenu',component: RestaurantMenuComponent},
  { path: 'editmenu/:id', component: EditMenuComponent },
  { path: 'editrest/:id', component: EditRestaurantComponent },
  { path:'confirm', component:ConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
