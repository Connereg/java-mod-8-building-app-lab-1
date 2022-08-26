import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentComponent } from './header-component.component';

describe('Header Component Tests', () => {
  let component: HeaderComponentComponent;
  let fixture: ComponentFixture<HeaderComponentComponent>;
  let testRunCount: number = 0;

  beforeEach(async () => {
    testRunCount++;
    console.log("'beforeEach()' has run " + testRunCount + " time(s)")

    await TestBed.configureTestingModule({
      declarations: [HeaderComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create a header component', () => {
    expect(component);
  });

  it('should contain the text "Welcome"', () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).contain("Welcome");
  })

  it("should contain the Text 'Welcome' in an <h2> header", () => {
    const componentHTML: HTMLElement = fixture.nativeElement;
    const h2Header = componentHTML.querySelector("h2");
    expect(h2Header!.textContent).contain("Welcome");
  })

  it("should contain the name of the active user from the controller", () => {
    const activeUser = component.activeUser;
    const componentHTML: HTMLElement = fixture.nativeElement;
    expect(componentHTML.textContent).contain(activeUser.firstName);
  })
});
