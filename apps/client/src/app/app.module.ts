import { MaterialModule } from '@angular-production/material';
import { UiToolbarModule } from '@angular-production/ui-toolbar';
import { CoreDataModule } from '@angular-production/core-data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, UiToolbarModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
