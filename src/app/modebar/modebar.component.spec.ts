import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModebarComponent } from './modebar.component';

describe('ModebarComponent', () => {
  let component: ModebarComponent;
  let fixture: ComponentFixture<ModebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
