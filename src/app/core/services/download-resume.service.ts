import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadResumeService {

  constructor(private _httpClient: HttpClient) { }

  downloadResume(): Observable<any> {
    const fileName = 'srimaharshimanchem.pdf';
    const url = `${environment.baseUrl}files/resume/${fileName}`;
    return this._httpClient.get(url, {
      headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
      observe: 'body',
      responseType: 'blob'
    });
  }
}
