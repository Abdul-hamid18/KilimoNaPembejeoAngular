import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/Layouts/Supplier/Services/Product/product.service';
import { Supplier } from 'src/app/Layouts/Supplier/Services/Profile/Supplier';
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
  suppliers!: Supplier[]

  hide = true;

  supplierForm: FormGroup = new FormGroup({
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierFName: new FormControl("", [Validators.required]),
    supplierLName: new FormControl("", [Validators.required]),
    supplierAddress: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });


  @ViewChild (MatPaginator) paginator!:MatPaginator;

  constructor(private supplierService:SuppliersService,
    public dialog: MatDialog,config: NgbModalConfig, private modalService: NgbModal) { 
      config.backdrop = 'static';
      config.keyboard = false;
    }
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
      alert("Msambazaji Amefutwa kikamilifu");
    },error=>{
      this.fetchSuppliers();
      alert("Msambazaji Ameshindwa Kufutwa");
    })
  }


  openDialog() {
    this.dialog.open(RegisterSupplierComponent);
  }

  openSm(deleteModal: any) {
    this.modalService.open(deleteModal, { size: 'sm', modalDialogClass: 'danger-modal' });
  }

  openToSave(addForm: any) {
    this.modalService.open(addForm,{ size: 'lg' })
  }

  saveNewSupplier() {
    this.supplierService.newSupplier(this.supplierForm.value).subscribe(response => {
      alert("Msambazaji amesajiliwa kikamilifu");
    }, error => {
      alert("Msambazaji ameshindwa kusajiliwa");
    })
  };




}