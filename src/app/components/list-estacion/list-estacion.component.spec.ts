import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstacionComponent } from './list-estacion.component';

describe('ListEstacionComponent', () => {
  let component: ListEstacionComponent;
  let fixture: ComponentFixture<ListEstacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
