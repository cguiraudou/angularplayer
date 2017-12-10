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
  historyUrl: string[];
  
  constructor(private sanitizer: DomSanitizer){
    this.historyUrl= [];
  }
  
  refresh(){
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.historyUrl.push(this.url);
  }
  
  urlHistoryClick(event){
    
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(event.value);
  }
}
