import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainModule } from '../main/main.module';
import { RootComponent } from '../main/main.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ImageTableComponent } from './image-table/image-table.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
    MainModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MenuBarComponent,
    ImageTableComponent,
    ImageDisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
