import { Component, OnInit, Input } from '@angular/core';
import { ApiGithubService, repoType } from '../../../services/api-github.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-detail-repository',
  templateUrl: './detail-repository.component.html',
  styleUrls: ['./detail-repository.component.css']
})
export class DetailRepositoryComponent implements OnInit {

  @Input() public repoPerfil;
  repos: repoType;
  faStar = faStar;
  constructor(private api: ApiGithubService) { }

  async ngOnInit() {
    this.repos = await this.api.getRepos(this.repoPerfil);
  }


}
