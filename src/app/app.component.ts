import { Component } from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string;
  url:string;
  sUrl: SafeUrl;
  historyUrl: string[];
  
  constructor(private sanitizer: DomSanitizer){
    this.historyUrl= [];
  }
  
  refresh(){
    //formatting url
    if(!this.userInput.includes("embed"){
      this.url='https://www.youtube.com/embed/'+this.userInput.substring(this.userInput.indexOf("?v=")+3);
      console.log(this.url);
    }
    //safe url
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.historyUrl.push(this.url);
  }
  
  urlHistoryClick(event){
    
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(event.value);
  }
}
