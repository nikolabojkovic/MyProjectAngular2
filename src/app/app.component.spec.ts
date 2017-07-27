 import { TestBed,
          ComponentFixture,
          ComponentFixtureAutoDetect } from '@angular/core/testing';
 import { By } from '@angular/platform-browser';
 import { DebugElement } from '@angular/core';
 import { RouterTestingModule } from '@angular/router/testing';

 import { AppComponent } from './app.component';

describe('AppComponet (inline template)', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        AppComponent 
      ], // declare the test component
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by css element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  // it('should display original title', () => {
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain(comp.title);
  // });

  // it('should display a different test title', () => {
  //   comp.title = 'Test Title';
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain('Test Title');
  // });

  // it('no title in the DOM until manually  call `detectChanges`', () => {
  //   expect(el.textContent).toEqual('');
  // });

  it('should display original title', () => {
    expect(el.textContent).toContain(comp.title);
  });

  it('should still see original title after comp.title change', () =>{
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    expect(el.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  })
});
