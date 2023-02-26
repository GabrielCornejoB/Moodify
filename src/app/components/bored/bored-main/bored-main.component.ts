import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.sass']
})
export class BoredMainComponent implements OnInit {

  path: string = "assets/gifs/happy-gifs/";
  chistep1: string[] = ["Camarero, ese filete tiene muchos nervios","Ayer fui al McDonald's con cuatro amigos","¡Estás obsesionado con la comida!"];
  chistep2: string[] = ["Pues normal, es la primera vez que se lo comen.","Tres eran de sagitario. Y el cuarto de libra.","No sé a qué te refieres croquetamente."];
  random: number = 0;

  ngOnInit(): void {

    this.random = Math.floor(Math.random() * this.chistep1.length);



  }
}
