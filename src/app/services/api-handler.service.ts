import { CoreResponse} from './../model/core-response';
import { twitterResponse } from './../model/twitter-response';
import { GithubUser, Languages, Repo, RepoResponse } from './../model/github-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  
  private GIT_API_SERVER = "https://api.github.com";
  private GIT_USER_NAME = "Marissccal"
  private GIT_USER = '/users/Marissccal'
  private CORE_API = '  https://hernanabeldanoapi.azurewebsites.net/api/core?url=https://core.ac.uk:443/api-v2/search/title%3AGAN%20%20and%20%2BGenerative%20%2Badversarial%20%2Bnetworks?page=1%26pageSize=10'
  private BIRDAPP_API_SERVER = "https://hernanabeldanoapi.azurewebsites.net/api/twitter?url=https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pieter_the%26count=3"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestGit(){
    return this.httpClient.get<GithubUser[]>(`${this.GIT_API_SERVER}${this.GIT_USER}`);

  }


  public sendGetRequestGitUser(username: string): Observable<RepoResponse[]> {
    return this.httpClient.get<Repo[]>(`${this.GIT_API_SERVER}/users/${username}/repos`).pipe(
      
      switchMap((response: Repo[]): Observable<RepoResponse[]> => forkJoin(
        
        response.map((repo: Repo): Observable<RepoResponse> => // Array.prototype,map
          
          this.httpClient.get<Record<string, number>[]>(repo.languages_url).pipe(
            
            map((Languages: Record<string, number>[]): RepoResponse => ({ ...repo, Languages })), 
        )),
      )),
    );
  }

  public GetLanguagesRequest(url:string){
    return this.httpClient.get<Languages[]>(`url`);

  }


  public sendGetRequestCore()
  {
    
    return this.httpClient.get<CoreResponse[]>(`${this.CORE_API}`);

  }

  public SendGetRequestBirdapp(){
    return this.httpClient.get<twitterResponse[]>(`${this.BIRDAPP_API_SERVER}`);
}
}



