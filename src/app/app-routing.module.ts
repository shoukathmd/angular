import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketingComponent } from './ticketing/ticketing.component';


const routes: Routes = [
  {path:'ticketing', component:TicketingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
