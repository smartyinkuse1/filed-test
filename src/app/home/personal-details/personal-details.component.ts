import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonalDetails } from './personal-details.model'

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  form: FormGroup
  submit: boolean = false;
  completeAdd: boolean = false
  details$: Observable<PersonalDetails[]>

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,]
      }),
      monthlyAdsBudget: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,]
      }),
      phone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required,]
      })
    })
  }
  onSubmit() {
    this.submit = true
    let currentDate = new Date().getFullYear()
    if (!this.form.valid) {
      return
    }
    const persnoalDetails: PersonalDetails = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      monthlyAdsBudget: this.form.value.monthlyAdsBudget,
      phone: this.form.value.phone
    }
    // this.store.dispatch(new CardActions.CreateCard(cardValue));
    // this.form.reset()
    // this.submit = false
    // this.completeAdd = true
  }

}
