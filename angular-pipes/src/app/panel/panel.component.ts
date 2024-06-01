import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-panel]',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">{{ header }} <small *ngIf="impure">(Impure)</small></h1>
        <p class="card-text">
          <ng-content />
        </p>
      </div>
    </div>
  `
})
export class PanelComponent {
  @Input() header!: string;
  @Input() impure!: boolean;
}
