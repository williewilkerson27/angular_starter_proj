import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <!-- we will place routerLink in brackets 
          so we can support property binding,
            which allows us to have dynamic values
            and more than just strings-->
      
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
//* @Input as used here allows us to receive data from the parent(housing-location.ts).
//* The ! is there to let Angular know that every field shall have a value
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
