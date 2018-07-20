import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  private heroesUrl = 'api/heroes';  

  constructor(
    private http: HttpClient,
    private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]>{
   return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id:number) : Observable<Hero>{
     const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions);
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions); 
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, httpOptions);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`);
  }
}
