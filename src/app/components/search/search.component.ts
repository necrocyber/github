import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('error', {static: false}) error: ElementRef<any>;
  faSearch = faSearch;

  constructor(private route: Router) { }

  ngOnInit() {

  }

  searchUser(param = []) {
    ((arg) => {
      if (arg.length < 1) {
        this.error.nativeElement.style.opacity = '1';
        return;
      }

      this.route.navigateByUrl(`/detail/${arg}`);

    })(param);
  }



}
