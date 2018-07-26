import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-class',
  templateUrl: './search-class.component.html',
  styleUrls: ['./search-class.component.css']
})
export class SearchClassComponent implements OnInit {

  @Input() keyword: String = '';
  @Output() keywordChange = new EventEmitter<String>();
  activated: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onChange(key: String) {
    this.keywordChange.emit(key);
    console.log(key);

    if (key === '') {
      this.activated = false;
    }
  }
}
