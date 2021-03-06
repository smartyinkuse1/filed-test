import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

import * as personalDetailsActions from "./home/personal-details/state/personal-detail.action";
import * as fromPersonalDetails from "./home/personal-details/state/personal-details.reducer";

import { PersonalDetails } from './home/personal-details/personal-details.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frontend-Technical';
  personalDetails$: Observable<PersonalDetails[]>;
  error$: Observable<String>;
  showApp = true
  constructor(private store: Store<fromPersonalDetails.AppState>, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val:any)=> {
      if (val instanceof NavigationEnd) {
        if (val?.url === "/home") {
          this.showApp = false
        }else {
          this.showApp = true
          this.store.dispatch(new personalDetailsActions.LoadPersonalDetailss());
          this.personalDetails$ = this.store.pipe(select(fromPersonalDetails.getpersonalDetails));
          this.error$ = this.store.pipe(select(fromPersonalDetails.getError));
        }

      }

    })
  }

}
