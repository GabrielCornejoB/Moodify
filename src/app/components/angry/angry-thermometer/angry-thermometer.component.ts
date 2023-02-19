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
  states: string[] = ["Tus niveles de enojo se encuentran muy bajos, probablemente estés pasando una situación molesta pero esta no te afecta demasiado", 
                      "Sigues tranquilo a pesar del problema que estés pasando, pero sabes que este te molesta un poco", 
                      "No sientes enojo pero tampoco te encuentras en calma", 
                      "Sientes que la situación es bastante molesta, pero tus pensamientos aun son optimistas y positivos", 
                      "Los problemas te están afectando más directamente, no sabes que pensar acerca de estos", 
                      "Sientes que el o los problemas van empeorando, y tu reacción hacia ellos se está tornando más negativa", 
                      "Tu situación se está saliendo de control pero aún no permites que esta te domine", 
                      "Sientes enojo, hay muchos pensamientos negativos en tu cabeza en estos momentos", 
                      "Experimentas ira, estás casi al tope de tu capacidad", 
                      "Te encuentras en un estado de furia total, esta puede estar nublando tus pensamientos"];


  showCard() {
    if (this.visibleCard == false) {
      this.visibleCard = true;
    }
  }
}
