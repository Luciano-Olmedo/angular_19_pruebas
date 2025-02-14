import { Component } from '@angular/core';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { Hero } from '../../shared/hero.interface';

@Component({
  selector: 'app-hero-list',
  imports: [HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  public heroes: Hero[] = [
    {
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
    },
    {
      id:6,
      name: "Shaka de Virgo",
      powerstats:{
        intelligence: 75,
        strength: 100,
        speed: 100,
        durability: 90,
        power: 100,
        combat: 85
      },
      image:'https://imgs.search.brave.com/bmeXptmBmw17KY7l-G4tFLLWmL0e1Bak-oS4FOhrG0k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82NTgwLzcyNDZm/M2FmNDg5NWRmYmQ1/ODhlMzBhYjVhN2Q0/NjhjZDgwYzE0YWVf/aHEuanBn',
      alignment: 'good',  
    },
    {
      id:9,
      name: "Camus de Acuario",
      powerstats:{
        intelligence: 75,
        strength: 100,
        speed: 100,
        durability: 90,
        power: 100,
        combat: 85
      },
      image:'https://imgs.search.brave.com/JRA-Y6rJg8QitChGsAmswUauEViXtCH3Or5HntjqL0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI0L2Nh/LzEyLzI0Y2ExMjIz/ZWUzZmZjZDE2Zjc1/ZmI3ZWYwZWE4MTcw/LmpwZw',
      alignment: 'good',  
    }
  ]

}
