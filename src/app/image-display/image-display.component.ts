import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from '../Image';

@Component({
  selector: 'image-display',
  templateUrl: 'image-display.component.html',
  styleUrls: ['image-display.component.css'],
})
export class ImageDisplayComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges) {
    if (changes['toDisplay']) {
      console.log(changes['toDisplay'].currentValue);
    }
    if (changes['item']) {
      console.log(changes['item'].currentValue);
    }
  }
  @Input() item!: Image;
  @Input() toDisplay: boolean = true;
}
