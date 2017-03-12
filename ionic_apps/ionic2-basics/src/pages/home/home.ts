import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from "../users/users";
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userPage = UsersPage;
  shopPage = ShopPage;

  constructor (private navCtrl: NavController) {}

  onGoToUsers() {
    this.navCtrl.push(this.userPage)
      .catch((err) => console.log('Access denied, Argument was ' + err));
  }
}
