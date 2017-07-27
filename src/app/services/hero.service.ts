import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Headers , Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    //private heroesUrl = 'api/heroes'; // Url to web api
    private heroesUrl = 'http://myprojectdotnet.somee.com/api/heroes';
    private headers = new Headers();


    constructor(private http: Http) {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
     }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(response => response.json() as Hero[] )
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(hero: Hero): Promise<Hero> {
        return this.http.post(this.heroesUrl, 
                              JSON.stringify(hero),
                              {headers: this.headers})
                    .toPromise()
                    .then(res => res.json() as Hero)
                    .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
    }
}