import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeFeaturesComponent } from './components/awesome-features/awesome-features/awesome-features.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderModule } from './components/header/header.module';
import { GenericFormModule } from './components/generic-form/generic-form.module';
import { SuperUserComponent } from './components/super-user/super-user.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';


@NgModule({
  declarations: [
    AppComponent,
    AwesomeFeaturesComponent,
    NavigationComponent,
    NotFoundComponent,
    SuperUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    GenericFormModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
