import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Perfil {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  public_repos: number;
  followers: number;
}

export type repoType = Array<{
  name: string,
  description: string,
  stargazers_count: number
}>;


@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  constructor(private http: HttpClient) { }

  async getUser(arg): Promise<Perfil> {
    return await this.http.get<Perfil>(`https://api.github.com/users/${arg}`).toPromise();
  }

  async getRepos(arg): Promise<repoType> {
    return await this.http.get<repoType>(`https://api.github.com/users/${arg}/repos`).toPromise();
  }
}
