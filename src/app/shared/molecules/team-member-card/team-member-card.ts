import { Component, input } from '@angular/core';
import { TeamMemberData } from '../../../core/models/interfaces/TeamMember.interface';

@Component({
  selector: 'app-team-member-card',
  imports: [],
  templateUrl: './team-member-card.html',
  styleUrl: './team-member-card.scss'
})
export class TeamMemberCard {
  member = input.required<TeamMemberData>();
  showHoverEffects = input<boolean>(true);
}
