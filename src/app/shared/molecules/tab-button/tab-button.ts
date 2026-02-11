import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { ProjectTab } from '../../../core/models/interfaces/ProjectData.interface';

@Component({
  selector: 'app-tab-button',
  imports: [],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabButton {
  tab = input.required<ProjectTab>();
  isActive = input<boolean>(false);
  tabClick = output<string>();

  onTabClick() {
    this.tabClick.emit(this.tab().id);
  }
}
