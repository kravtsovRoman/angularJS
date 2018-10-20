import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
    new Date(2015, 3, 1).toDateString(),
    new Date(2011, 1, 6).toDateString(),
    new Date(2007, 3, 4).toDateString(),
    new Date(2009, 2, 2).toDateString(),
    new Date(2017, 9, 4).toDateString()
  ];

  constructor() {}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
