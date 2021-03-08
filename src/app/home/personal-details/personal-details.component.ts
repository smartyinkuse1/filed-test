import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonalDetails } from './personal-details.model';
import { Store } from "@ngrx/store";
import * as fromPersonalDetail from "./state/personal-details.reducer";
import * as  CardActions from './state/personal-detail.action';
import { ToastrService } from 'ngx-toastr';

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
  @Input() status;
  constructor(private toastr: ToastrService, private store: Store<fromPersonalDetail.AppState>) { }

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
        validators: [Validators.required, Validators.pattern("[0-9]+")]
      }),
      phone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern("[0-9]+")]
      })
    })
  }
  onSubmit() {
    this.submit = true
    let currentDate = new Date().getFullYear()
    console.log(this.form);

    if (!this.form.valid) {
      return this.toastr.error("Some Invalid fields")
    }
    const persnoalDetails: PersonalDetails = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      monthlyAdsBudget: +this.form.value.monthlyAdsBudget,
      phone: +this.form.value.phone
    }
    this.store.dispatch(new CardActions.CreatePersonalDetails(persnoalDetails));
    this.form.reset()
    this.submit = false
    this.completeAdd = true
  }

}
