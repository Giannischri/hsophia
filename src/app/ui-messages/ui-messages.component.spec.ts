import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMessagesComponent } from './ui-messages.component';

describe('UiMessagesComponent', () => {
  let component: UiMessagesComponent;
  let fixture: ComponentFixture<UiMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
