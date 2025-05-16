import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitMakerComponent } from './portrait-maker.component';

describe('PortraitMakerComponent', () => {
  let component: PortraitMakerComponent;
  let fixture: ComponentFixture<PortraitMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortraitMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortraitMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
