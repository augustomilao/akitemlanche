import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInserirPage } from './cliente-inserir.page';

describe('ClienteInserirPage', () => {
  let component: ClienteInserirPage;
  let fixture: ComponentFixture<ClienteInserirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInserirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInserirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
