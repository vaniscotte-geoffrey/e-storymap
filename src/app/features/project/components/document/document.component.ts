import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  img = [
    'http://www.consult-action.fr/assets/uploads/images2.jpg',
    'https://e7.pngegg.com/pngimages/569/984/png-clipart-computer-icons-button-button-logo-cross.png',
    'https://onlyforcarowners.com/wp-content/uploads/2021/09/35fe912c0f198f4e4062dfdea441b0c7-1.jpg'
  ];
  public document = {
    title: 'Mon Document',
    image: this.img[Math.floor(Math.random() * this.img.length)]
  }

}
