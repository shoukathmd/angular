import { Component, OnInit } from '@angular/core';
import { TicketingService } from '../../services/ticketing.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TicketingComponent } from '../ticketing.component';
import { EditTicketingComponent } from '../edit-ticketing/edit-ticketing.component';

@Component({
  selector: 'app-ticketing-list',
  templateUrl: './ticketing-list.component.html',
  styleUrls: ['./ticketing-list.component.css'],
})
export class TicketingListComponent implements OnInit {
  displayedColumns = ['category', 'description','action']
  dataSource;
  
  
  constructor( private ticketingService:TicketingService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  this.getTicketsDetails();
  }
  getTicketsDetails(){
    this.ticketingService.getAPI().subscribe(results => {
      // console.log(results);
      this.dataSource = results;
    });
  }
  openDialog(){
    const dialogRef= this.dialog.open(TicketingComponent,{
     width:"700px"
     
   });
   dialogRef.afterClosed().subscribe(result => {
    this.getTicketsDetails();
   });
 }

 openEditDialog(element){
  const dialogRef= this.dialog.open(EditTicketingComponent,{
   width:"700px", data : element
 });
 dialogRef.afterClosed().subscribe(result => {
  this.getTicketsDetails();
 });
}

}


