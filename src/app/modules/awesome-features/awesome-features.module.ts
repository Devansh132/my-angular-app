import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeFeaturesComponent } from '../../../app/components/awesome-features/awesome-features/awesome-features.component';

const routes: Routes = [
  { path: '', component: AwesomeFeaturesComponent },
];

@NgModule({
  declarations: [
    // AwesomeFeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AwesomeFeaturesModule { }

