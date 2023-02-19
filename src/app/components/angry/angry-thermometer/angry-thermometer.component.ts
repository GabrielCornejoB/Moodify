import { Component } from '@angular/core';

@Component({
  selector: 'app-angry-thermometer',
  templateUrl: './angry-thermometer.component.html',
  styleUrls: ['./angry-thermometer.component.sass']
})
export class AngryThermometerComponent {
  angriness: number = 0;
  visibleCard: boolean = false;
  values: number[] = [10,9,8,7,6,5,4,3,2,1];

  showCard() {
    if (this.visibleCard == false) {
      this.visibleCard = true;
    }
  }
}
