import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
<!-- Search section with form -->  
    <section>
  <form>
    <input type=text placeholder="filter by city">
    <button class="primary" type="button">Search</button>
  </form>
    </section>
<!-- Results section -->
    <section class="results">
      <!-- This will display our generic results  -->
      <!-- *ngFor is a special for loop that is responsive to changes and reduces redundancy -->
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
      
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// Array to store housing locations
  housingLocationList: HousingLocation[] = [];
// Inject the HousingService using the new inject function  
  housingService: HousingService = inject (HousingService);
// Constructor initializes the component
  constructor() {
// Populate housingLocationList with data from the service
    this.housingLocationList = this.housingService.getAllHousingLocation()
  }
}
