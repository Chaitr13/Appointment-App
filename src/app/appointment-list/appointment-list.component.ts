import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  //property used for one way data binding
  appointments: Appointment[] = [];
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  addAppointment(): void {
    alert(this.newAppointmentTitle);
  }
}
