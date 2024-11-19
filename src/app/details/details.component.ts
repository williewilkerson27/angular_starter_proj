import { Component, inject } from '@angular/core'; // inject: Function to inject dependencies (new way of dependency injection)
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }} <!-- {{ housingLocationId }} is interpolation syntex!! -->
    </p>
  `,
  styleUrls: ['./details.component.css'] // Array of CSS files that style this component
})
export class DetailsComponent {
  // Inject the ActivatedRoute service using the new inject function
  // This gives access to the current route information
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
