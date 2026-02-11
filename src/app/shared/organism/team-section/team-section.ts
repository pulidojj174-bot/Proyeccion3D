import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';
import { TeamMemberCard } from '../../molecules/team-member-card/team-member-card';
import { TeamMemberData } from '../../../core/models/interfaces/TeamMember.interface';

@Component({
  selector: 'app-team-section',
  imports: [TeamMemberCard],
  templateUrl: './team-section.html',
  styleUrl: './team-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSection {
  teamMembers = input<TeamMemberData[]>([]);
  sectionTitle = input<string>('Conoce a Nuestro Equipo');
  sectionSubtitle = input<string>('Nuestro diverso equipo de expertos reúne décadas de experiencia en diseño, ingeniería y fabricación.');

  // Signal para controlar animaciones
  private _isVisible = signal(false);

  get isVisible() {
    return this._isVisible();
  }

  onIntersection(isVisible: boolean) {
    this._isVisible.set(isVisible);
  }
}
