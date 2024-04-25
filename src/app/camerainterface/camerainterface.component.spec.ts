import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerainterfaceComponent } from './camerainterface.component';

describe('CamerainterfaceComponent', () => {
  let component: CamerainterfaceComponent;
  let fixture: ComponentFixture<CamerainterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamerainterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamerainterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
