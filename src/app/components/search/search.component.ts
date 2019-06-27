import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ApiGithubService } from './../../services/api-github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('error', {static: false}) error: ElementRef<any>;
  faSearch = faSearch;

  constructor(private api: ApiGithubService, private route: Router) { }

  ngOnInit() {

  }

  searchUser(param = []) {
    (async (arg) => {
      if (arg.length < 1) {
        this.error.nativeElement.style.opacity = '1';
        return;
      }

      const result = await this.api.getUser(arg);
      if (result.message) {
        // error
        this.route.navigate(['/detail'], { state: { state: 'error', data: '' }});
      } else {
        // success
        // this.route.navigate(['detail'], { state: { state: 'success', data: result }});
      }

    })(param);
  }



}
