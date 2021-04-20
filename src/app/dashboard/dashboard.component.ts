import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private shareService:ShareService) { }

  ngOnInit() {
    this.getHeroes();
    this.shareService.setSocialMediaTags(
      "https://www.codinghub.net/article/update-meta-tags-dynamically-for-facebook-open-graph",
      "TOH Dashboard",
      "Angular Template Project",
      "https://fillmurray.com/200/300"
    );

    // to test domino
    const pathname = window.location.pathname;
    console.log(pathname);
    const lang = localStorage.getItem('_lang');
    console.log(lang);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
