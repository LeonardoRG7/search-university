import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUniversityComponent } from './modules/search-university/search-university.component';

const routes: Routes = [
  {
    path: '',
    component: SearchUniversityComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
