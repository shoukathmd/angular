import { Component, OnInit } from '@angular/core';
import { TicketingService } from '../../services/ticketing.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TicketingComponent } from '../ticketing.component';

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
    this.ticketingService.getAPI().subscribe(results => {
      console.log(results);
      
      this.dataSource = results['data'];
      
      // console.log(this.dataSource)
      
  });
  }
  openDialog(){
     this.dialog.open(TicketingComponent,{
      width:"700px"
    });
  }


}
