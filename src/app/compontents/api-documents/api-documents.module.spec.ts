import { ApiDocumentsModule } from './api-documents.module';

describe('ApiDocumentsModule', () => {
  let apiDocumentsModule: ApiDocumentsModule;

  beforeEach(() => {
    apiDocumentsModule = new ApiDocumentsModule();
  });

  it('should create an instance', () => {
    expect(apiDocumentsModule).toBeTruthy();
  });
});
