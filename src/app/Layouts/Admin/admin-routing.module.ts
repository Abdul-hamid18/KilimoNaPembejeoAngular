import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminNavComponent } from './Components/admin-nav/admin-nav.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './Components/admin-register/admin-register.component';
import { FarmersListComponent } from './Components/farmers-list/farmers-list.component';
import { FullProductsListComponent } from './Components/full-products-list/full-products-list.component';
import { RegisterFarmerComponent } from './Components/register-farmer/register-farmer.component';
import { RegisterSupplierComponent } from './Components/register-supplier/register-supplier.component';
import { SuppliersListComponent } from './Components/suppliers-list/suppliers-list.component';

const routes: Routes = [

  {path:"", component:AdminLoginComponent},
  {path:"admin-register", component:AdminRegisterComponent},


  {path:"admin-nav", component:AdminNavComponent, children:[
    {path:"", component:AdminDashboardComponent},
    {path:"full-products-list", component:FullProductsListComponent},
    {path:"register-farmer", component:RegisterFarmerComponent},
    {path:"farmers-list", component:FarmersListComponent},
    {path:"register-supplier", component:RegisterSupplierComponent},
    {path:"suppliers-list", component:SuppliersListComponent},
    {path:"admin-profile", component:AdminProfileComponent}

      
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
