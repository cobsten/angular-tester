import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './main.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  exports: [RootComponent],
})
export class MainModule {}
