import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Repository } from '../../models/repository.interface';
/**
 * Generated class for the RepoDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})
export class RepoDetailsPage {

  repository: Repository;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    if (navParams) {
      this.repository = navParams.get('repo');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

}
