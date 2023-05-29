import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookCollectionPageComponent } from './my-book-collection-page.component';

describe('MyBookCollectionPageComponent', () => {
  let component: MyBookCollectionPageComponent;
  let fixture: ComponentFixture<MyBookCollectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookCollectionPageComponent]
    });
    fixture = TestBed.createComponent(MyBookCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
