import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketingComponent } from './ticketing/ticketing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { TicketingListComponent } from './ticketing/ticketing-list/ticketing-list.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http"
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { NotificationService } from './services/notification.service'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import { EditTicketingComponent } from './ticketing/edit-ticketing/edit-ticketing.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketingComponent,
    TicketingListComponent,
    EditTicketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSortModule


  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TicketingComponent]
})
export class AppModule { }
