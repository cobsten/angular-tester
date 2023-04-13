import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainModule } from '../main/main.module';
import { RootComponent } from '../main/main.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ImageTableComponent } from './image-table/image-table.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { penList } from './Pens';
import { imageList } from './Image';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewService } from './review.service';
import { CommentFormComponent } from './comment-form/comment-form.component';

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'pens', component: ImageTableComponent, data: penList },
  { path: 'images', component: ImageTableComponent, data: imageList },
  { path: 'books', component: ProductListComponent },
  {
    path: 'books/:id',
    component: ProductDetailsComponent,
    data: { title: 'Component One' },
  },
  { path: 'comments', component: CommentFormComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MainModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MenuBarComponent,
    ImageTableComponent,
    ImageDisplayComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CommentFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ReviewService],
})
export class AppModule {}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
