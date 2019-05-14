import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { LoginService } from './login.service';
import { By } from '@angular/platform-browser';

describe('the login component', () => {
  describe('with a logged in user', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let deMessage: DebugElement;
    let elMessage: HTMLElement;
    let stubbedLoginService: LoginService;

    beforeEach(() => {
      stubbedLoginService = {
        isLoggedIn: true,
        getUserName: () => 'Ben Solo'
      };

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [{ provide: LoginService, useValue: stubbedLoginService }]
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      deMessage = fixture.debugElement.query(By.css('[data-login-message]'));
      elMessage = deMessage.nativeElement;
      fixture.detectChanges();
    });
    it('should display the logged in message', () => {
      expect(elMessage.textContent).toBe('Welcome, Ben Solo');
    });
    it('has the list', () => {

    });
    it('formats the entries correctly', () => {

    });

  });
  describe('with a non-logged in user', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let deMessage: DebugElement;
    let elMessage: HTMLElement;
    let stubbedLoginService: LoginService;

    beforeEach(() => {
      stubbedLoginService = {
        isLoggedIn: false,
        getUserName: () => 'Ben Solo'
      };

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [{ provide: LoginService, useValue: stubbedLoginService }]
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      deMessage = fixture.debugElement.query(By.css('[data-login-message]'));
      elMessage = deMessage.nativeElement;
      fixture.detectChanges();
    });
    it('should display the logged in message', () => {
      expect(elMessage.textContent).toBe('You are not logged in');
    });

  });
});
