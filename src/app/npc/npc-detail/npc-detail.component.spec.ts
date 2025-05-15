import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcDetailComponent } from './npc-detail.component';

describe('NpcDetailComponent', () => {
  let component: NpcDetailComponent;
  let fixture: ComponentFixture<NpcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpcDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
