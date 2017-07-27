import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css', '../hero-detail/hero-detail.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  loading: boolean;
  text: {};

  constructor(private http: Http,
              private heroService: HeroService,
              private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then( heroes => { this.heroes = heroes, this.loading = false });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    let hero = new Hero();
    hero.name = name;
    
    this.heroService.create(hero)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

////
  getCurrency(){
    this.http.post("https://partner.ostrovok.ru/api/affiliate/v2/currency", {}, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
        .subscribe(
            (response) => {
                this.text = response.json();
            },
            (error) => {
            }
        );
  }
}
