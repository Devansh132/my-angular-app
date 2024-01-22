import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from '../example/example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    data: { preload: true }, // This line indicates preloading for this route
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleModule {}
