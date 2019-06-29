import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  faSearch = faSearch;
  user: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.loadDetail();
  }

  loadDetail() {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
  }

}
