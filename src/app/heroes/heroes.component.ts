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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroSevice.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  getHeros() : void{
    this.heroSevice.getHeroes()
      .subscribe(x=>this.heroes = x);
  }
  
  ngOnInit() {
    this.getHeros();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroSevice.deleteHero(hero).subscribe();
  }

}
