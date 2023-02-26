import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy-alt',
  templateUrl: './happy-alt.component.html',
  styleUrls: ['./happy-alt.component.sass']
})
export class HappyAltComponent implements OnInit {
  
  path: string = "assets/gifs/happy-gifs/";
  imgs: string[] = ["happy-1.gif", "happy-2.gif","happy-3.gif"];
  imgPath: string = "";
  phrases: string[] = ["Evita los pensamientos negativos, recuerda que por cada minuto de enojo pierdes 60 segundos de felicidad.",
                        "La vida cada día te ofrece una nueva oportunidad de ser felíz, esta se llama 'HOY'.",
                        "No esperes el momento perfecto, toma el momento y hazlo perfecto.",
                        "La felicidad no depende de lo que tienes o de quién eres. Depende únicamente de lo que piensas."];

  random: number = 0;
  random2: number = 0;

  ngOnInit(): void {
    this.random = Math.floor(Math.random() * (this.imgs.length));
    this.imgPath = this.path + this.imgs[this.random];
    this.random2 = Math.floor(Math.random() * (this.phrases.length));
  }
}
