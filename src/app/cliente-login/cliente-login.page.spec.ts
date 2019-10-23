import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLoginPage } from './cliente-login.page';

describe('ClienteLoginPage', () => {
  let component: ClienteLoginPage;
  let fixture: ComponentFixture<ClienteLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
