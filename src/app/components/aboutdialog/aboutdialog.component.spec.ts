import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdialogComponent } from './aboutdialog.component';

describe('AboutdialogComponent', () => {
  let component: AboutdialogComponent;
  let fixture: ComponentFixture<AboutdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
