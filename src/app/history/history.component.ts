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


  ngOnInit() {
    
    
  }

}
