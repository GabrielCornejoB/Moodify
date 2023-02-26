import { Component } from '@angular/core';

@Component({
  selector: 'app-sad-alt',
  templateUrl: './sad-alt.component.html',
  styleUrls: ['./sad-alt.component.sass']
})
export class SadAltComponent {
  sadgifsurl:string = "assets/gifs/sad-gifs/";
  gifnames:string[] = ["1.gif", "2.gif","3.gif", "4.gif","5.gif", "6.gif","7.gif", "8.gif","9.gif"];
  concatenatedArray:string[] = [];

  constructor() {
    this.concatenatedArray = this.gifnames.map((element) => {
      return this.sadgifsurl + element;
    });
    console.log(this.concatenatedArray);

    this.shuffle(this.concatenatedArray);
    console.log(this.concatenatedArray);
  }

  private shuffle(array: any[]) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;


      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
