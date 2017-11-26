import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {CategoryPipe,CategoryPipe2} from './hero.serach.service';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HeaderComponent } from './header.component';
import {FooterComponent } from './footer.component';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import {HeroesListComponent} from './hero-list.component';
import {MenComponent} from './product/men/men.component';
import {WomenComponent} from './product/women/women.component';
import {ElectronicComponent} from './product/electronics/electronics.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{
    passThruUnknownUrl: true }),
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenComponent,
    WomenComponent,
    ElectronicComponent,
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesListComponent,CategoryPipe,CategoryPipe2
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
