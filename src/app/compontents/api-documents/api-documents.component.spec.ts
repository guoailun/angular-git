import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentsComponent } from './api-documents.component';

describe('ApiDocumentsComponent', () => {
  let component: ApiDocumentsComponent;
  let fixture: ComponentFixture<ApiDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
