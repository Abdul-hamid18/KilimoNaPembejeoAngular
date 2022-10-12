import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/Layouts/Supplier/Services/Product/product.service';
import { SuppliersService } from '../../Services/Suppliers/suppliers.service';
import { RegisterSupplierComponent } from '../register-supplier/register-supplier.component';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {
  displayedColumns: string[]=['No.', 'Name', 'Address', 'Email', 'Phone', 'Actions']
  dataSource = new MatTableDataSource();
  suppliers:any[]=[];

  @ViewChild (MatPaginator) paginator!:MatPaginator;

  constructor(private supplierService:SuppliersService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchSuppliers()
    this.dataSource.paginator = this.paginator;

  }
 

  fetchSuppliers(){
    this.supplierService.getSuppliers().subscribe(response=>{
      this.dataSource=new MatTableDataSource(response)
      this.suppliers=response

      console.log(this.dataSource)
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteSupplier(supplier:any){
    this.supplierService.deleteSupplier(supplier.supplierId).subscribe(response=>{
      this.fetchSuppliers();
      alert("Supplier has been deleted");
    },error=>{
      this.fetchSuppliers();
      alert("Fail to delete supplier");
    })
  }


  openDialog() {
    this.dialog.open(RegisterSupplierComponent);
  }


}