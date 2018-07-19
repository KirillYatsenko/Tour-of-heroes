import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]>{
    this.messageService.add('HeroSerivce: fetched heroes');
    return of(HEROES);
  }

  getHero(id:number) : Observable<Hero>{
    return of(HEROES.find(x=>x.id === id));
  }
}
