import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationLocalComponent } from './confirmation-local.component';

describe('ConfirmationLocalComponent', () => {
  let component: ConfirmationLocalComponent;
  let fixture: ComponentFixture<ConfirmationLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
