import { Component } from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url:string;
  sUrl: SafeUrl;
  
  constructor(private sanitizer: DomSanitizer){
    this.url = `https://www.youtube.com/embed/IVEwemk-TRU`;
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
  refresh(){
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
}
