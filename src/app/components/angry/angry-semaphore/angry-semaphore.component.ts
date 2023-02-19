import { Component } from '@angular/core';

@Component({
  selector: 'app-angry-semaphore',
  templateUrl: './angry-semaphore.component.html',
  styleUrls: ['./angry-semaphore.component.sass']
})
export class AngrySemaphoreComponent {
  activeStep: number = 0;
  subtitles: string[] = ["Luz roja", "Luz amarilla", "Luz verde"];
  steps: string[] = ["Cierra tus ojos, y respira profundamente 3 veces.", 
                    "Piensa mínimo 3 formas de solucionar el conflicto, no importa que sean super descabelladas",
                    "Entre las formas que pensaste, elige la alternativa más adecuada y ponla en acción!"];
  nextStep() {
    if (this.activeStep < 2){
      this.activeStep += 1;
    }
  }
}
