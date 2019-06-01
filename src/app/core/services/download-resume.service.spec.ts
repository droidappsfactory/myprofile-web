import { TestBed } from '@angular/core/testing';

import { DownloadResumeService } from './download-resume.service';

describe('DownloadResumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadResumeService = TestBed.get(DownloadResumeService);
    expect(service).toBeTruthy();
  });
});
