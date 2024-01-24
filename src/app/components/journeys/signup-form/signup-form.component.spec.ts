import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignUpFormComponent } from './signup-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SignUpFormComponent, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.signUpForm).toBeDefined();
  });

  it('should set submitted to false initially', () => {
    expect(component.submitted).toBeFalse();
  });

  it('should set message to an empty string initially', () => {
    expect(component.message).toBe('');
  });

  it('should call saveUser method when save button is clicked', () => {
    spyOn(component, 'saveUser');
    const saveButton = fixture.nativeElement.querySelector('#save-btn');
    saveButton.click();
    expect(component.saveUser).toHaveBeenCalled();
  });

  it('should call resetForm method when reset button is clicked', () => {
    spyOn(component, 'resetForm');
    const resetButton = fixture.nativeElement.querySelector('#reset-btn');
    resetButton.click();
    expect(component.resetForm).toHaveBeenCalled();
  });
});
