import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()
  history: string[];
  
  @Output()
  urlSender = new EventEmitter();
  
  changeUrl(url:string){
    this.urlSender.emit({
      value: url
    });
  }
  
  constructor() { }

  ngOnInit() {
  }

}
