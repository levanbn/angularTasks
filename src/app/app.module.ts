import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './table/table.directive';
import { informationService } from './information/information.service';
import { informationComponent } from './information/information.component';
import { tableService } from './table/table.service';
import { Component } from './information/information.component';
import { datePipe } from './information/date.pipe';
import { statusColorDirective } from './information/statusColor.directive';
import { cardColorDirective } from './information/changeColor.directive';
import { tableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    tableComponent,
    informationComponent,
    statusColorDirective,
    datePipe,
    statusColorDirective,
    cardColorDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [informationService, tableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
