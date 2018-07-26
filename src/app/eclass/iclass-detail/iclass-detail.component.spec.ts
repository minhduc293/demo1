import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IclassDetailComponent } from './iclass-detail.component';

describe('IclassDetailComponent', () => {
  let component: IclassDetailComponent;
  let fixture: ComponentFixture<IclassDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IclassDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IclassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
