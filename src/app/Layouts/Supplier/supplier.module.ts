import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {MatChipsModule} from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { MatOptionModule } from '@angular/material/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SupplierLoginComponent } from './Components/supplier-login/supplier-login.component';
import { PendingOrdersComponent } from './Components/pending-orders/pending-orders.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { NotifierComponent } from './Components/notifier/notifier.component';


@NgModule({
  declarations: [
    SupplierComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    PendingOrdersComponent,
    SupplierLoginComponent,
    NotifierComponent,
    ProductsListComponent
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
    FormsModule,
    MatChipsModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatOptionModule,
    NgbPaginationModule
  ]
})
export class SupplierModule { }
