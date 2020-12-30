import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngstyleComponent } from './testngstyle.component';

describe('TestngstyleComponent', () => {
  let component: TestngstyleComponent;
  let fixture: ComponentFixture<TestngstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
