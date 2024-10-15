import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorListComponent } from './doador-list.component';

describe('DoadorListComponent', () => {
  let component: DoadorListComponent;
  let fixture: ComponentFixture<DoadorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoadorListComponent]
    });
    fixture = TestBed.createComponent(DoadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
