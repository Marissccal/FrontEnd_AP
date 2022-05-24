import { ResponsiveService } from './../services/responsive.service';
import { GithubUser } from './../model/github-user';
import { CoreResponse, Datum, Repository, RepositoryDocument, Source } from './../model/core-response';
import { Observable } from 'rxjs';
import { ApiHandlerService } from './../services/api-handler.service';
import { ChangeDetectionStrategy, Component, Input , OnInit} from '@angular/core';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss'],
  animations: [
    trigger('gitstate', [
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

export class ApiPageComponent implements OnInit {

  constructor(private apiService: ApiHandlerService, private responsiveservice: ResponsiveService) { }

  githubResponse$: Observable<GithubUser>;
  coreResponse$: Observable<CoreResponse>;
  BirdAppResponse$: Observable<CoreResponse>;
  dataResponse$: Observable<Datum>;
  isHandset$: Observable<boolean>;
  gitstate: FadeState;
  gitshow: boolean;










  ngOnInit(): void {

    this.isHandset$ = this.responsiveservice.isHandset$;
    this.gitstate = 'hidden';
    this.gitshow = false;

    this.apiService.sendGetRequestGit().subscribe({
      next: (result: any) => {
      this.gitshow = true;
      this.gitstate = 'visible';
      this.githubResponse$ = result;





      },
      error: (err: any) => {
      console.log(err);
      },
      complete: () => {
      }
      });

      this.apiService.sendGetRequestCore().subscribe({
        next: (result: any) => {
        this.coreResponse$ = result;
        this.dataResponse$ = this.coreResponse$['data']


        },
        error: (err: any) => {
        console.log(err);
        },
        complete: () => {
        }
        });

        this.apiService.  SendGetRequestBirdapp().subscribe({
          next: (result: any) => {
          this.BirdAppResponse$ = result;


          },
          error: (err: any) => {
          console.log(err);
          },
          complete: () => {
          }
          });




  }


}
