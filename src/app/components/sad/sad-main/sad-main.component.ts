import { Component } from '@angular/core';

@Component({
  selector: 'app-sad-main',
  templateUrl: './sad-main.component.html',
  styleUrls: ['./sad-main.component.sass']
})
export class SadMainComponent {
  array:string[] = ["Habla sobre ello con alguien en quien confíes","Llora si lo sientes necesario, es importante desahogarte ","No te juzgues por como te sientes","Intenta no aislarte de tus seres queridos","Trata de distraerte ya sea saliendo o haciendo deporte","Sigue una rutina y ponte pequeños objetivos"]

  constructor() {
    this.shuffle(this.array);
    console.log(this.array);
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
