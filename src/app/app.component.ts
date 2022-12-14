import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSchedulerModule } from 'devextreme-angular';
import { Appointment, Service } from './app.service';


@Component({
    styleUrls: ['./app.component.css'],
  selector: 'demo-app',
  templateUrl: './app.component.html',
  providers: [Service],
})
export class AppComponent {
  appointmentsData: Appointment[];

  currentDate: Date = new Date(2021, 3, 29);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxSchedulerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
