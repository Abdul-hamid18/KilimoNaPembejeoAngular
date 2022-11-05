import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Farmers } from '../../Services/FarmersServices/Farmers';
import { FarmersService } from '../../Services/FarmersServices/farmers.service';
import { RegisterFarmerComponent } from '../register-farmer/register-farmer.component';

@Component({
  selector: 'app-farmers-list',
  templateUrl: './farmers-list.component.html',
  styleUrls: ['./farmers-list.component.css']
})
export class FarmersListComponent implements OnInit {
  displayedColumns: any[] = ['No.', 'Name', 'Category', 'Address', 'Phone', 'Email', 'Actions']
  dataSource = new MatTableDataSource();
  farmers!: Farmers[]




  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private farmersSerice: FarmersService, private router:Router,
    public dialog: MatDialog,
    config: NgbModalConfig, private modalService: NgbModal) { 
      config.backdrop = 'static';
    config.keyboard = false;
    }

  ngOnInit(): void {
    this.fetchFarmers()
    this.dataSource.paginator = this.paginator;

  }


  fetchFarmers() {
    this.farmersSerice.getFarmers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response)
      this.farmers = response

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


  deleteFarmer(farmer:any){
    this.farmersSerice.deleteFarmer(farmer.farmerId).subscribe(response=>{
      this.fetchFarmers();
      alert("Mkulima Amefutwa Kikamilifu");
    },error=>{
      this.fetchFarmers();
      alert("Mkulima Ameshindwa kufutwa");
    })
  }

  openDialog() {
    this.dialog.open(RegisterFarmerComponent);
  }

  openSm(deleteModal: any) {
    this.modalService.open(deleteModal, { size: 'sm', modalDialogClass: 'danger-modal' });
  }


 
}