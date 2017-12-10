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
    
    //recup data localstorage
    //history 
    var nbH = Number( localStorage.getItem('history'));
    for(var i=0; i< nbH; i++){
      this.historyUrl.push(localStorage.getItem('h'+i));
      //console.log(localStorage.getItem('h'+i));
    }
    //bookmarks
    var nbB= Number( localStorage.getItem('bookmarks'));
    for(i=0; i< nbB; i++){
      this.bookmarkedUrl.push(localStorage.getItem('b'+i));
      //console.log(localStorage.getItem('b'+i));
    }
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
    
    localStorage.setItem('h'+this.historyUrl.length, this.url);
    this.historyUrl.push(this.url);
    localStorage.setItem('history',''+ this.historyUrl.length);
    this.userInput = '';
  }
   
  bookmark(){
    if(this.url) {
      localStorage.setItem('b'+this.bookmarkedUrl.length, this.url)
      this.bookmarkedUrl.push(this.url);  
      localStorage.setItem('bookmarks',''+this.bookmarkedUrl.length);
    }
  }
  
  urlHistoryClick(event){
    this.url=event.value;
    this.sUrl = this.sanitizer.bypassSecurityTrustResourceUrl(event.value);
  }
}
