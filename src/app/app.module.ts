import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { BrowseComponent } from './components/browse/browse.component';
import { GenresComponent } from './components/genres/genres.component';
import { DataComponent } from './components/data/data.component';
import { ImageComponent } from './components/image/image.component';
import { LiveTvComponent } from './components/live-tv/live-tv.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AnimesComponent } from './components/animes/animes.component';
import { SettingsComponent } from './components/settings/settings.component';

/* SERVICES */
import { OperationsService , TimeService } from './services';
import { CommonComponent } from './components/common/common.component';

const appRoute: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path:'home', component: HomeComponent},
    { path:'movies', component: MoviesComponent},
    { path:'selected', component: SelectedItemComponent},
    { path:'browse/:value', component: CommonComponent},
    { path:'genres', component: GenresComponent},
    { path:'liveTV', component: LiveTvComponent},
    { path: 'favourites', component: FavouritesComponent},
    { path: 'animes', component: AnimesComponent},
    { path: 'settings', component: SettingsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SelectedItemComponent,
    BrowseComponent,
    GenresComponent,
    DataComponent,
    ImageComponent,
    LiveTvComponent,
    FavouritesComponent,
    AnimesComponent,
    SettingsComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [OperationsService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
