import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
})
export class Tab1Page {
  public simulateFastNavigation = true;

  constructor(private router: Router) {}

  navigateViaRootOutlet() {
    const navigationExtras: NavigationExtras = {
      state: {
        simulateFastNavigation: this.simulateFastNavigation,
      },
    };

    this.router.navigate(['/page1'], navigationExtras);
  }
}
