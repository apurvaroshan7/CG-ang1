import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    RestaurantComponent,
    UserComponent,
    AddMenuComponent,
    EditMenuComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RestaurantMenuComponent,
    ConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
