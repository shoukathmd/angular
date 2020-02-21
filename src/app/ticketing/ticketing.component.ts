import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TicketingService } from '../services/ticketing.service'
import { Ticketing } from '../models/ticketing-model';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {
 category: string;
 description : string;
 postTicketing: Ticketing = new Ticketing()
 ticketingForm: FormGroup;

  constructor(private dialog:MatDialog,
  private ticketingService:TicketingService, private formBuilder:FormBuilder,
  @Inject(MAT_DIALOG_DATA)public data:any) { }
    
  ngOnInit(): void {

    this.ticketingForm = this.formBuilder.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
  
    })
  }
  closeDialog(){
    const dialogRef =this.dialog.afterAllClosed;
    }
    
    submit(){
      this.postTicketing.category = this.category;
      this.postTicketing.description = this.description
      console.log("submit post data");
      this.ticketingService.postAPI(this.postTicketing)
       }
       clear(){
         this.ticketingForm.reset;
       }
}
