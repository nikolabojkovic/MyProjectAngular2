import { TestBed,
         ComponentFixture,
         ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async } from '@angular/core/testing'
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent} from './heroes.component';
//import { HeroService } from './hero.service';

describe('Heroes Component (externat template)', () => {
    let comp: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let HeroServiceStub = {
        isLoggedIn: true,
        hero: { name: 'Test hero'}
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule, RouterTestingModule ],
            declarations: [
                HeroesComponent
            ],
            //providers: [ {provide: HeroService, useValue: HeroServiceStub }]
        }).compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        expect(el.textContent).toContain("My Heroes");
    });
});