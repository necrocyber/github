import { Component, OnInit, Input } from '@angular/core';
import { ApiGithubService, Perfil } from '../../../services/api-github.service';
import { Observable } from 'rxjs';
import { faLocationArrow, faMapMarked, faBox, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-perfil',
  templateUrl: './detail-perfil.component.html',
  styleUrls: ['./detail-perfil.component.css']
})
export class DetailPerfilComponent implements OnInit {

  @Input() public dataPerfil;
  userPerfil: Perfil;
  faLocationArrow = faLocationArrow;
  faMapMarked = faMapMarked;
  faBox = faBox;
  faUsers = faUsers;

  constructor(private api: ApiGithubService) { }

  async ngOnInit() {
    this.userPerfil = await this.api.getUser(this.dataPerfil);
  }

}
