import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  private userClient: Observable<any> = new Observable();

  constructor(private http: HttpClient) { }

  async getUser(arg) {
    try {
      this.userClient = this.http.get(`https://api.github.com/users/${arg}`);
      const result = await this.userClient.toPromise();
      return result;
    } catch (error) {
      return { status: error.status, message: error.statusText };
    }
  }
}
