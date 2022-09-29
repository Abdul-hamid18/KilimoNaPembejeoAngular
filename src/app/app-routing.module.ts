import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Layouts/Home/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},

  {
    path:"admin-login",
    loadChildren: ()=> import("./Layouts/Admin/admin.module").then((m)=> m.AdminModule)
  },

  {
    path:"supplier-login",
    loadChildren: ()=> import("./Layouts/Supplier/supplier.module").then((m)=> m.SupplierModule)
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
