import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { GitHubServiceProvider } from '../../providers/github-service/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string; // set by the profile search and is what the user typed in
  searchResultUser: User; // set by the provider, and is the user object representing the username
  repositories: Repository[];

  constructor(private github: GitHubServiceProvider, private navCtrl: NavController, private navParams: NavParams, private events: Events) {
  }

  getUserInformation(): void {
    // this.github.mockGetUserInformation(this.username).subscribe( (data: User) => this.searchResultUser = data);
    // this.github.mockGetRepositoryInformation(this.username).subscribe( (data: Repository[]) => this.repositories = data);
    this.github.getUserInformation(this.username).subscribe((data: User) => this.searchResultUser = data );
    this.github.getRepositoryInformation(this.username).subscribe( (data: Repository[]) => this.repositories = data);
  
}
  
  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username) {
      console.log(this.username);
      this.getUserInformation();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultsPage');
    this.events.subscribe('repository:selected', (selectedRepository) => {
      console.log("ProfileSearchResultsPage. repository:selected event.");
      if(this.navCtrl.getActive().name != 'RepoDetailsPage') {
        this.navCtrl.push('RepoDetailsPage', {
          repo: selectedRepository
        });
      }
    });

  }
  
  ionViewWillUnload() {
    this.events.unsubscribe('repository:selected');
  }

}
