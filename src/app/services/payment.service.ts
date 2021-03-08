import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, BehaviorSubject, of } from 'rxjs';
import { PersonalDetails } from '../home/personal-details/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  //No real Database to Add new Cards, So there's isn't a fully persistent Storage
  serverUrl = "http://localhost:3000/details"
  private id = 1
  constructor(private http: HttpClient) { }

  createPersonalDetails(card) {
    //Simulate successful HttpRequest
   return this.http.post<PersonalDetails>(this.serverUrl, card)
  }
  getPersonalDetails() {

    //Simulate successful HttpRequest
    return this.http.get<PersonalDetails[]>(this.serverUrl);
  }
}
