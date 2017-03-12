import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  // buyoutPage = BuyoutPage;

  constructor (private navCtrl: NavController) {}

  onLoadItem(item: string) {
    this.navCtrl.push(BuyoutPage, {itemName: item});
  }
  //
  // onGoBack() {
  //   this.navCtrl.pop();
  //   // this.navCtrl.popToRoot();
  // }

}
