import { Component, OnInit } from '@angular/core';
import { Team } from '../../../assets/team';
declare var $: any;
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  displayTeam = true;
  teams = [
    new Team('Jack Williams', 'UI/UX Designer'),
    new Team('Kate Beckinsale', 'Project Manager'),
    new Team('Mickey Thompson', 'Developer'),
    new Team('Brian Deegan', 'Web Designer')
  ];
  public addMember(): void {
   this.teams.push(new Team('Brian Deegan', 'Web Designer'));
  }
  public removeObject(): void {
    $('.teamMain').css('display', 'none');
  }
  public minObject(): void {
    this.displayTeam = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
