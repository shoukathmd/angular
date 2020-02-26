import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TicketingService} from '../services/ticketing.service'
import { NotificationService } from '../services/notification.service'
import {Ticketing} from '../models/ticketing-model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {
 
  submitData = { 
    category:'',
    description:''
  }

  postTicketing: Ticketing = new Ticketing()
  ticketingForm: FormGroup;

  constructor(private notificationService:NotificationService, private ticketingService:TicketingService,  private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog,
    public dialogRef:MatDialogRef<TicketingComponent>,
         ){
          this.ticketingForm = this.formBuilder.group({
            category: ['', Validators.required],
            description: ['', Validators.required],
          })
     }

  ngOnInit(): void {
  }
  submit(){
this.ticketingService.postAPI(this.submitData).add(results=>{
  this.notificationService.success(':: Submitted Successfully');

})
   this.dialogRef.close();

  }
 


 

}
