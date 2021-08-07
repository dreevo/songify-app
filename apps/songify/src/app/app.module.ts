import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular-production/material';
import { CoreDataModule } from '@angular-production/core-data';
import { CoreStateModule } from '@angular-production/core-state';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongsDetailsComponent } from './songs/songs-details/songs-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    HomeComponent,
    SongsListComponent,
    SongsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
