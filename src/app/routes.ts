import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;
// Now we need to update the app to display components
// src/app/app.component.ts