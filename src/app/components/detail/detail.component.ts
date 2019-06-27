import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.loadDetail();
  }

  loadDetail() {
    const { state, data } = this.route.routerState.snapshot.root.queryParams;
  }

}
