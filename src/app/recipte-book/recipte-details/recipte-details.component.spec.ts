import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipteDetailsComponent } from './recipte-details.component';

describe('RecipteDetailsComponent', () => {
  let component: RecipteDetailsComponent;
  let fixture: ComponentFixture<RecipteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
