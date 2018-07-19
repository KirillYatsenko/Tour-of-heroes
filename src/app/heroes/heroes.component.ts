import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id : 1,
  //   name: "Kirill Yatsenko"
  // };
  
  heroes : Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor(private heroSevice : HeroService) { }

  getHeros() : void{
    this.heroSevice.getHeroes()
      .subscribe(x=>this.heroes = x);
  }
  
  ngOnInit() {
    this.getHeros();
  }

}
