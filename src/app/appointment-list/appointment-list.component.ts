import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  //property used for one way data binding
  appointment: Appointment = {
    id: 1,
    title: 'Take dog for a walk',
    date: new Date('2026-07-30'),
  };
}
