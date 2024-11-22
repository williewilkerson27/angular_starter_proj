import { Component, inject } from '@angular/core'; // inject: Function to inject dependencies (new way of dependency injection)
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.available_units}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <button class="primary" type="button">Apply Now</button>
    </section>
    </article>
  `,
  styleUrls: ['./details.component.css'] // Array of CSS files that style this component
})
export class DetailsComponent {
  // Inject the ActivatedRoute service using the new inject function
  // This gives access to the current route information
  route: ActivatedRoute = inject(ActivatedRoute); // For accessing URL parameters
  housingService = inject(HousingService);  // Service for housing data
  housingLocation : HousingLocation | undefined; // Property to store housing details

  constructor() {
    // Get the ID from the URL parameters and convert to number
    const housingLocationId = Number(this.route.snapshot.params['id']); 
    // Fetch housing location details using the ID
    this.housingLocation = this.housingService.getAllHousingLocationById(housingLocationId)
  }
}
