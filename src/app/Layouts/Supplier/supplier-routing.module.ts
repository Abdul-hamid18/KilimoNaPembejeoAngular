import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { PendingOrdersComponent } from './Components/pending-orders/pending-orders.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { SupplierLoginComponent } from './Components/supplier-login/supplier-login.component';
import { UpdatePasswordComponent } from './Components/update-password/update-password.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';

const routes: Routes = [
  {path:"", component:SupplierLoginComponent},
  {path:"supplier-register", component:RegisterComponent},

  {path:"nav", component:NavbarComponent, children:[
    {path:"", component:DashboardComponent},
    {path:"products-list", component:ProductsListComponent},
    {path:"new-product", component:NewProductComponent},
    {path:"update-product", component:UpdateProductComponent},
    {path:"profile", component:ProfileComponent},
    {path:"update-profile", component:UpdateProfileComponent},
    {path:"update-password", component:UpdatePasswordComponent},
    {path:"pending-orders", component:PendingOrdersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
