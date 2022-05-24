import { ResponsiveService } from './../../services/responsive.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../../modelos/persona.model';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  
})
export class ShellComponent {

    persona: persona = new persona("", "");

    scrollToElement($element:string): void {
      //console.log($element);
      var element = document.getElementById($element);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    isHandset$: Observable<boolean>;
    isBoth$: Observable<boolean>;

    constructor(public personaService: PersonaService, private service: ResponsiveService){}

    ngOnInit() {
      this.personaService.getPersona().subscribe(data=> {this.persona = data})
      this.isHandset$ = this.service.isHandset$;
      this.isBoth$ = this.service.isHandset$;
    }

}

