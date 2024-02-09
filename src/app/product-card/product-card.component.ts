
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() imageUrl = '';
  @Input() title = '';
  @Input() description = '';
  @Input() price = '';
  @Input() ratings=''
}

