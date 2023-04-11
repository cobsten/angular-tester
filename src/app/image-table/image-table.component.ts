import { Component, OnInit } from '@angular/core';
import { Image, imageList } from '../Image';

@Component({
  selector: 'image-table',
  templateUrl: 'image-table.component.html',
  styleUrls: ['image-table.component.css'],
})
export class ImageTableComponent implements OnInit {
  images: Image[] = imageList;
  toDisplay: boolean = true;
  ngOnInit(): void {}

  toggleDisplay() {
    this.toDisplay = !this.toDisplay;
  }
}
