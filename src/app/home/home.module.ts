import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

import { personalDetailsReducer } from './personal-details/state/personal-details.reducer';
import { PersonalDetailsEffect } from './personal-details/state/personal-detail.effects'

import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [HomeComponent, PersonalDetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("cards", personalDetailsReducer),
    EffectsModule.forFeature([PersonalDetailsEffect])
  ]
})
export class HomeModule { }
