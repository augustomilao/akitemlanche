import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasPage } from './politicas.page';

describe('PoliticasPage', () => {
  let component: PoliticasPage;
  let fixture: ComponentFixture<PoliticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
