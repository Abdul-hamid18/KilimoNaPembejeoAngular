import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminRegisterComponent } from './Components/admin-register/admin-register.component';
import { AdminNavComponent } from './Components/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { FarmersListComponent } from './Components/farmers-list/farmers-list.component';
import { SuppliersListComponent } from './Components/suppliers-list/suppliers-list.component';
import { FullProductsListComponent } from './Components/full-products-list/full-products-list.component';
import { RegisterFarmerComponent } from './Components/register-farmer/register-farmer.component';
import { RegisterSupplierComponent } from './Components/register-supplier/register-supplier.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminRegisterComponent,
    AdminNavComponent,
    AdminDashboardComponent,
    FarmersListComponent,
    SuppliersListComponent,
    FullProductsListComponent,
    RegisterFarmerComponent,
    RegisterSupplierComponent,
    AdminLoginComponent,
    AdminProfileComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,


  ]
})
export class AdminModule { }
