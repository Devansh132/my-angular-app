import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { AwesomeFeaturesModule } from './modules/awesome-features/awesome-features.module';
import { AdminModule } from './modules/admin/admin.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { SuperUserComponent } from './components/super-user/super-user.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { ExampleModule } from './modules/example/example.module';


const routes: Routes = [
  { path: '', loadChildren: () => WelcomeModule },
  { path: 'awesome-features', loadChildren: () => AwesomeFeaturesModule },
  { path: 'admin', loadChildren: () => AdminModule},
  {path:"superuser",canActivate:[AuthenticationGuard],component:SuperUserComponent},
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy }),AdminModule, ExampleModule,],
  exports: [RouterModule],
})
export class AppRoutingModule {}