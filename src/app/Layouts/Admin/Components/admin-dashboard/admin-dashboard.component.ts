import { Component, OnInit } from '@angular/core';
import { Farmers } from '../../Services/FarmersServices/farmers';
import { FarmersService } from '../../Services/FarmersServices/farmers.service';
import { FullProductsService } from '../../Services/FullProducts/full-products.service';
import { FullProducts } from '../../Services/FullProducts/FullProducts';
import { Suppliers } from '../../Services/Suppliers/Suppliers';
import { SuppliersService } from '../../Services/Suppliers/suppliers.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  farmers!: Farmers[]
  suppliers!:Suppliers[]
  products!: FullProducts[]

  constructor(private farmersService:FarmersService,
    private supplierServices:SuppliersService,
    private productsServices:FullProductsService) { }

  ngOnInit(): void {
    this.fetchFarmers();
    this.fetchSuppliers();
    this.fetchProducts();
  }

  fetchFarmers() {
    this.farmersService.getFarmers().subscribe(response => {
      this.farmers = response
      console.log(this.farmers)
    });
  }

  fetchSuppliers() {
    this.supplierServices.getSuppliers().subscribe(response => {
      this.suppliers = response
    });
  }

  fetchProducts() {
    this.productsServices.getProducts().subscribe(response => {
      this.products = response
    });
  }

}
