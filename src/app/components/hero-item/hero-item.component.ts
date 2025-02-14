import { Component, input } from '@angular/core';
import { Hero, PowerStat } from '../../shared/hero.interface';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.css'
})
export class HeroItemComponent {
  hero = input.required<Hero>();


  decrementPowerStats(powerstat: PowerStat):void{

    const value= this.hero().powerstats[powerstat];
    if(value>0){
      this.hero().powerstats[powerstat]= value - 1;
    }
  };
  incrementPowerStats(powerstat: PowerStat):void{

    const value= this.hero().powerstats[powerstat];
    if(value<100){
      this.hero().powerstats[powerstat]= value + 1;
    }
  }
  

};


