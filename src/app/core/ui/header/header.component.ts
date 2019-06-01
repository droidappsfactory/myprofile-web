import { Component, OnInit } from '@angular/core';
import { DownloadResumeService } from '../../services/download-resume.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private _resumeService: DownloadResumeService) { }

  ngOnInit() {
  }

  downloadResume() {

    this._resumeService.downloadResume().subscribe(data => {
      if (window.navigator.msSaveOrOpenBlob) {
        // IE11
        window.navigator.msSaveOrOpenBlob(
          data,
          'srimaharshimanchem.pdf'
        );
      } else {
        // Google chome, Firefox, ....
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'srimaharshimanchem.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
      }
    });

  }
}
