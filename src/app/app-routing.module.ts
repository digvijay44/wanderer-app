import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './core/private-layout/private-layout.component';
import { PublicLayoutComponent } from './core/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'user', component: UserComponent },
      {
        path: 'trip',
        loadChildren: () =>
          import('../app/modules/trip/trip.module').then((m) => m.TripModule),
      },
      {
        path: 'mytrips',
        loadChildren: () =>
          import('../app/modules/my-trips/my-trips.module').then((m) => m.MyTripsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
