import { ResponsiveService } from './../services/responsive.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


export interface skill {
  name: string;
  logo?: string;
}

export interface card {
  title: string;
  date: string;
  company: string;
  paragraph: string;
}




@Component({
  selector: 'app-home-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit{

  skills: skill[] = [

    {name: 'Data Structures & Algorithms' , logo:'assets/svg/data.svg'},
    {name: 'Machine Learning & AI'},
    {name: 'System Analysis and Design'},
    {name: 'Git', logo:'assets/svg/github-1.svg'},
    {name: 'SQL', logo:'assets/svg/sql.svg'},
    {name: 'UI/UX'},
    {name: 'Oracle', logo:'assets/svg/oracle.svg'},
    {name: 'MongoDB', logo:'assets/svg/mongodb.svg'},
    {name: 'Restful APIs', logo:'assets/svg/api.svg'},
    {name: 'JSON', logo:'assets/svg/json.svg'},
    {name: 'ASP.Net & MVC', logo:'assets/svg/dotnet-icon.svg'},
    {name: 'Angular', logo:'assets/svg/angular-icon.svg'},
    {name: 'Electron', logo:'assets/svg/electron.svg'},
    {name: 'Hardhat', logo:'assets/svg/hardhat.svg'},
    {name: 'Truffle', logo:'assets/svg/truffle.svg'},
    {name: 'Unity', logo:'assets/svg/unity.svg'},
    {name: 'React', logo:'assets/svg/react.svg'},
    {name: 'NodeJS', logo:'assets/svg/nodejs.svg'},

  ];

  programs: skill[] = [
    {name: 'Solidity' , logo:'assets/svg/solidity.svg'},
    {name: 'Rust' , logo:'assets/svg/rust.svg'},
    {name: 'TypeScript' , logo:'assets/svg/typescript.svg'},
    {name: 'Python', logo:'assets/svg/python-5.svg'},
    {name: 'C#', logo:'assets/svg/c--4.svg'},
    {name: 'C++', logo:'assets/svg/cplusplus.svg'},
    {name: 'Java', logo:'assets/svg/java.svg'},
    {name: 'HTML' , logo:'assets/svg/HTML5_badge.svg'},
    {name: 'CSS' , logo:'assets/svg/css3.svg'},
    {name: 'Javascript', logo:'assets/svg/javascript.svg'},

  ];

  workexperiences: card[] = [
    {title: 'Solidity Developer' , date: '2021 - 2021', company: 'PoliDex Finance.', paragraph:"• Implementation Smart Contract Mastercheff.<br>• Implementation Smart Contract Router.<br>• Implementation Smart Contract Factory.<br>• Technologies: Blockchain Polygon, Solidity, JavaScript, Truffle, web3, Node.js, Infura."},
    {title: 'Solidity Developer' , date: '2021 - 2021', company: 'Oros Finance.', paragraph:"• Implementation Smart Contract Mastercheff.<br>• Implementation Smart Contract Factory.<br>• Technologies: Blockchain BSC, Solidity, JavaScript, Hardhat, ethers.js, Node.js, Molaris. React, Typescript, PHP."},
    {title: 'Blockchain Developer' , date: '2021 - 2022', company: 'Space War Zone - PH vs Holders.', paragraph:"• Implementation and development of 2D Game in Unity and Apps on the web.<br>• Implementation Smart Contract Tokens, Presale, Vesting, Audit.<br>• Implementation Smart Contract ERC721/1155 (NFTs), Vaults, Banks, Multisig and Seed.<br>• Technologies: Blockchain BSC-AVAX, Solidity, JavaScript, Hardhat, ethers.js, Node.js, Molaris. React, Typescript, PHP. Unity, JavaScript. Next.js, Nomiclabs. Test Mocha."}
  ];

  educationexperiences: card[] = [
    {title: 'UN. NACIONAL DE CUYO' , date: '2002 - December 2007', company: 'Civil Engineering', paragraph:"• Specialty in Earthquake-Resistant Structures.<br>• Diploma in Soil Mechanics."},
    {title: 'ARGENTINA PROGRAMA' , date: '2021-2022', company: 'Ministerio de Desarrollo Productivo de la Nación', paragraph:"•   Jr. Full Stack Web Developer"},
  ];




  isBoth$: Observable<boolean>;
  isLarge$: Observable<boolean>;
  isHandset$: Observable<boolean>;

  downloadFile()
  {
    let link = document.createElement("a");
    link.download = "HernanAbeldañoResume.pdf";
    link.href = "assets/HernanAbeldañoResume.pdf";
    link.click();
  }


  constructor(private responsiveservice: ResponsiveService){}

  ngOnInit() {
    this.isLarge$ = this.responsiveservice.isLarge$;
    this.isBoth$ = this.responsiveservice.isBoth$;
    this.isHandset$ = this.responsiveservice.isHandset$;

      }

}
