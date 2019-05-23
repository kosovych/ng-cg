import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipteItemComponent } from './recipte-item.component';

describe('RecipteItemComponent', () => {
  let component: RecipteItemComponent;
  let fixture: ComponentFixture<RecipteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
