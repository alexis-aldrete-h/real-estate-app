import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSearchBarComponent } from './address-search-bar.component';

describe('AddressSearchBarComponent', () => {
  let component: AddressSearchBarComponent;
  let fixture: ComponentFixture<AddressSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
