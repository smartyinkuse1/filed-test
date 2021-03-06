import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { PersonalDetails } from '../home/personal-details/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  //No real Database to Add new Cards, So there's isn't a fully persistent Storage
  private id = 1
  constructor() { }

  createPersonalDetails(card) {
    // Simulate Http Post request Obseverbles
    const newCard = {...card, id: this.id}
    this.id++
    //Simulate successful HttpRequest
   return of(newCard)
  }
  getPersonalDetails() {
    const newCard = [{firstName: "Ola", lastName: "Joshua", email: "ola@gmail.com", monthlyAdsBudget: 1, phone:123 }]
    //Simulate successful HttpRequest
   return of(newCard)
  }
}
