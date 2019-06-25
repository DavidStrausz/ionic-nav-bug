import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-one',
  templateUrl: 'page1.html',
})
export class Page1Component {
  private simulateFastNavigation: boolean;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.simulateFastNavigation = this.router.getCurrentNavigation().extras.state.simulateFastNavigation;
      }
    });
  }

  ionViewDidEnter() {
    if (this.simulateFastNavigation) {
      this.navCtrl.pop();
    }
  }
}
