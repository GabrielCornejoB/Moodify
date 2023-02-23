import { Component } from '@angular/core';

@Component({
  selector: 'app-sad-alt',
  templateUrl: './sad-alt.component.html',
  styleUrls: ['./sad-alt.component.sass']
})
export class SadAltComponent {
  sadgifs:string = "../../../../assets/gifs/sad-gifs/";
  array1:string[] = ["1.gif", "2.gif","3.gif", "4.gif","5.gif", "6.gif","7.gif", "8.gif","9.gif"];
  concatenatedArray:string[] = [];

  constructor() {
    this.concatenatedArray = this.array1.map((element) => {
      return this.sadgifs + element;
    });
    console.log(this.concatenatedArray);
  }
}
