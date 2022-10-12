import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Farmers } from '../../Services/FarmersServices/farmers';
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
    public dialog: MatDialog) { }

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
      alert("Farmer has been deleted");
    },error=>{
      this.fetchFarmers();
      alert("Fail to delete farmer");
    })
  }

  openDialog() {
    this.dialog.open(RegisterFarmerComponent);
  }

 
}