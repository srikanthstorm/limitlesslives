import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { PreviousEventsComponent } from './components/previous-events/previous-events.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'previous-events', component: PreviousEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
