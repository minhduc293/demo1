import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IclassComponent } from './iclass.component';

describe('IclassComponent', () => {
  let component: IclassComponent;
  let fixture: ComponentFixture<IclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
