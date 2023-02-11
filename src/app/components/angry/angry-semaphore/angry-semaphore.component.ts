import { Component } from '@angular/core';

@Component({
  selector: 'app-angry-semaphore',
  templateUrl: './angry-semaphore.component.html',
  styleUrls: ['./angry-semaphore.component.sass']
})
export class AngrySemaphoreComponent {
  angriness: number = 0;
  visibleCard: boolean = false;
  values: number[] = [10,9,8,7,6,5,4,3,2,1];

  showCard() {
    if (this.visibleCard == false) {
      this.visibleCard = true;
    }
  }
}
