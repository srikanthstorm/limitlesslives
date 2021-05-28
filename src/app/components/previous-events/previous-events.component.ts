import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.css']
})
export class PreviousEventsComponent implements OnInit {

  eventsData: any = '';
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }


  getEvents() {
    this.eventService.getEvents().toPromise().then(data => {
      this.eventsData = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }

  returnTimestamp(timestamp: any) {
    return new Date(timestamp).toLocaleString();

  }
}
