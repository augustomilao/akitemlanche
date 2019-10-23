import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarPage } from './cliente-editar.page';

describe('ClienteEditarPage', () => {
  let component: ClienteEditarPage;
  let fixture: ComponentFixture<ClienteEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEditarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
