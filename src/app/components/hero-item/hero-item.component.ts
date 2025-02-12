import { Component } from '@angular/core';
import { Hero, PowerStat } from '../../shared/hero.interface';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.css'
})
export class HeroItemComponent {
  hero: Hero ={
    id:5,
    name: "Aioria de Leo",
    powerstats:{
      intelligence: 75,
      strength: 100,
      speed: 100,
      durability: 90,
      power: 100,
      combat: 85
    },
    image:'https://imgs.search.brave.com/_UG6TRXd6rpSlLTuaqU9XWW_cU4gey6Sur1RfiyVZ6w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzdh/LzU4LzFlN2E1OGFl/NjRkY2I1ZDU0ZjQz/NGQ3MzgyNDBkYTZk/LmpwZw',
    alignment: 'good',
      

  }



  decrementPowerStats(powerstat: PowerStat):void{

    const value= this.hero.powerstats[powerstat];
    if(value>0){
      this.hero.powerstats[powerstat]= value - 1;
    }
  };
  incrementPowerStats(powerstat: PowerStat):void{

    const value= this.hero.powerstats[powerstat];
    if(value<100){
      this.hero.powerstats[powerstat]= value + 1;
    }
  }
  

};


