import { TestBed, inject } from '@angular/core/testing';

import { ApiDocumentsService } from '../api-documents/api-documents.service';

describe('ApiDocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDocumentsService]
    });
  });

  it('should be created', inject([ApiDocumentsService], (service: ApiDocumentsService) => {
    expect(service).toBeTruthy();
  }));
});
