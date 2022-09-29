import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProductsListComponent } from './full-products-list.component';

describe('FullProductsListComponent', () => {
  let component: FullProductsListComponent;
  let fixture: ComponentFixture<FullProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
