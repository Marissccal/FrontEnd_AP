import { ResponsiveService } from './../services/responsive.service';
import { Observable } from 'rxjs';
import { GithubUser, Languages, Repo, RepoResponse } from './../model/github-user';
import { ApiHandlerService } from './../services/api-handler.service';
import { Component, OnInit } from '@angular/core';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';



export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  animations: [
    trigger('repostate', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('1500ms ease-out')]),
      transition('visible => hidden', [animate('1500ms ease-out')])
    ])
  ],
})
export class PortfolioPageComponent implements OnInit {

  constructor(private apiService: ApiHandlerService , private responsiveservice: ResponsiveService) { }

  isHandset$: Observable<boolean>;
  githubResponse$: Observable<RepoResponse>;
  repostate: FadeState;
  reposhow: boolean;

  //

  SendRepoRequest($userName:string): void {
    this.apiService.sendGetRequestGitUser($userName).subscribe({
      next: (result: any) => {
      this.reposhow = true;
      this.repostate = 'visible';
      this.githubResponse$ = result;
      console.log(result);
      },
      error: (err: any) => {
      console.log(err);
      },
      complete: () => {

      }
      });
  }

  onSubmit($userName: string) {
    console.log($userName)
    this.SendRepoRequest($userName)
  }



  ngOnInit(): void {
    this.isHandset$ = this.responsiveservice.isHandset$;
    this.SendRepoRequest('Marissccal');
  }

  public openNewTab(repoUrl: string) {
    window.open(repoUrl, '_blank');
  }

}
