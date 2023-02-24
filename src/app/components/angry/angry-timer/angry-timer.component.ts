import { Component } from '@angular/core';

@Component({
  selector: 'app-angry-timer',
  templateUrl: './angry-timer.component.html',
  styleUrls: ['./angry-timer.component.sass']
})
export class AngryTimerComponent {
  time: number = 0;
  display: any;
  interval: any;

  timerActive: boolean = false;
  disabledBtn = false;

  activities: string[] = ["¿Recuerdas que pudiste medir tus emociones al inicio?, ¿en este momento las dimensiones igual?, interioriza sobre estos un momento",
                          "Todo problema, por complicado que parezca tiene una solución, idea un plan de acción con lo que propusiste en el semaforo",
                          "Listo! eso es todo, ojalá puedas solucionar todos tus problemas y puedas llegar a un estado de paz contigo mismo y con los demás :), si deseas volver al menú inicial presiona el logo en la parte superior"];

  startTimer() {
    if (!this.timerActive) {
      this.timerActive = true;
      this.disabledBtn = true;
      this.interval = setInterval(() => {
        if (this.time < 25) {
          this.time++;
        }
        if (this.time == 25) {
          clearInterval(this.interval);
          this.timerActive = false;
        }
        
        this.display = this.transform(this.time);
      }, 1000);
    }    
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = (value - minutes * 60);
    
    if (seconds < 10) {
      return "0" + (value - minutes * 60);
    }
    return (value - minutes * 60) + "";
  }
}
