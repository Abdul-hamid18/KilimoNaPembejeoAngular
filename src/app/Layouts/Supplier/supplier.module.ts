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

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SupplierLoginComponent } from './Components/supplier-login/supplier-login.component';
import { PendingOrdersComponent } from './Components/pending-orders/pending-orders.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    SupplierComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    ProductsListComponent,
    NewProductComponent,
    ProfileComponent,
    PendingOrdersComponent,
    SupplierLoginComponent,
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    CommonModule,
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
export class SupplierModule { }
