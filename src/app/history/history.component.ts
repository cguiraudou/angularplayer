import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()
  history: string[];
  @Input()
  bookmarks: string[];
  
  
  @Output()
  urlSender = new EventEmitter();
    
  constructor(
  ) { }
  
  changeUrl(url:string){
    this.urlSender.emit({
      value: url
    });
  }

  
  //fonction accordéon css
  myAccFunc(menu:string) {
    var x = document.getElementById(menu);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-red";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-red", "");
    }
  }
  
  ngOnInit() {
    
    
  }

}
