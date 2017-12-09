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
    
  }
  
  refresh(){
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
}
