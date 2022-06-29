import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  Aproducts = products
  Bproducts = products
  
  Cproducts = products
  Dproducts = products
  likeCount= 0;
  isLiked = false;
  
  likeTheButton = () => {
    if(this.isLiked)
    this.likeCount--;
    else
    this.likeCount++;

    this.isLiked = !this.isLiked
  }

  
  constructor(public router:Router) { 
    this.Aproducts = this.products.filter(product => product.catId === 1)
    this.Bproducts = this.products.filter(product => product.catId === 2)
    this.Cproducts = this.products.filter(product => product.catId === 3)
    this.Dproducts = this.products.filter(product => product.catId === 4)
    
}


  share() {
    window.alert('The product has been shared!');
  }
}


