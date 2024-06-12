import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalbuttomComponent } from './calbuttom.component';

describe('CalbuttomComponent', () => {
  let component: CalbuttomComponent;
  let fixture: ComponentFixture<CalbuttomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalbuttomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalbuttomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
