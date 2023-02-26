import { Component } from '@angular/core';

@Component({
  selector: 'app-bored-alt',
  templateUrl: './bored-alt.component.html',
  styleUrls: ['./bored-alt.component.sass']
})
export class BoredAltComponent {

  boredgifsurl:string = "../../../../assets/gifs/bored-gifs/"; // url de la carpeta bored gifs
  gifnames:string[] = ["1.gif", "2.gif","3.gif", "4.gif","5.gif", "6.gif","7.gif", "8.gif","9.gif"]; //Revisa que los nombres dentro de la carpeta de bored gifs sean los mismos que la del arreglo
  concatenatedArray:string[] = [];

  constructor() {
    this.concatenatedArray = this.gifnames.map((element) => {
      return this.boredgifsurl + element;
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




