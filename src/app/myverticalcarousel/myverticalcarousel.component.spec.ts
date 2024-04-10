import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyverticalcarouselComponent } from './myverticalcarousel.component';

describe('MyverticalcarouselComponent', () => {
  let component: MyverticalcarouselComponent;
  let fixture: ComponentFixture<MyverticalcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyverticalcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyverticalcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
