import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  post = [
    { imageUrl: 'assets/bodylotion.webp', title: 'Body Lotion', description: 'Daily nourishing body lotion for even-toned, visibly glowing & soft skin. Lightweight & quick-absorbing, it’s suitable for all skin types.', price: 'Rs.395', ratings: '5' },
    //{ imageUrl: 'assets/minisunscreen.jpg', title: 'Minimalist Sunscreen', description: 'This sunscreen is formulated with 4 very effective UV-filters, namely, Uvinul, Avobenzone, Octocrylene & Titanium Dioxide.', price: 'Rs.380', ratings: '4.5' },
    
  ];
}
