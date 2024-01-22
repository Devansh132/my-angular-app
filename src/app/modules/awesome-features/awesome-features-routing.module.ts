import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeFeaturesComponent } from '../../../app/components/awesome-features/awesome-features/awesome-features.component';
import { AwesomeFeaturesResolver } from './awesome-features.resolver';

const routes: Routes = [
  {
    path: '',
    component: AwesomeFeaturesComponent,
    resolve: {
      resolverData: AwesomeFeaturesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwesomeFeaturesRoutingModule {}
