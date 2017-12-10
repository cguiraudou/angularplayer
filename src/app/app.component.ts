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
  bookmarkedUrl: string[];
  
  constructor(private sanitizer: DomSanitizer){
    this.historyUrl= [];
    this.bookmarkedUrl = [];
  }
  
  refresh(){
    //formatting url
    if(!this.userInput.includes("embed")){
      this.url='https://www.youtube.com/embed/'+this.userInput.substring(this.userInput.indexOf("?v=")+3);
    } else {
      this.url= this.userInput;
    }
    //safe url
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.historyUrl.push(this.url);
  }
  
  bookmark(){
    this.bookmarkedUrl.push(this.url);  
  }
  
  urlHistoryClick(event){
    this.url=event.value;
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(event.value);
  }
}
