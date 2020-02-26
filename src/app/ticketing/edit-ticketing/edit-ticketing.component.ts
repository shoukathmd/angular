import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TicketingService} from '../../services/ticketing.service'
import { NotificationService } from '../../services/notification.service'
import {Ticketing} from '../../models/ticketing-model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-ticketing',
  templateUrl: './edit-ticketing.component.html',
  styleUrls: ['./edit-ticketing.component.css']
})
export class EditTicketingComponent implements OnInit {
  submitData = { 
    category:'',
    description:''
  }
  postTicketing: Ticketing = new Ticketing()
  ticketingForm: FormGroup;
  constructor(private   ticketingService :TicketingService,  private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog,
    public dialogRef:MatDialogRef<EditTicketingComponent>) { 
      this.ticketingForm = this.formBuilder.group({
        category:['',Validators.required],
        description:['',Validators.required]
      })
    }

  ngOnInit(): void {
  }
  Edit() {
    this.ticketingService.putAPI(this.data).subscribe(results=>{
      // console.log(results);
    })
    this.dialogRef.close();
  }
  

}
