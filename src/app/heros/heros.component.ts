import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../hero-mock';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  
  heros = HEROS;
  selectedHero? : Hero;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }

}
