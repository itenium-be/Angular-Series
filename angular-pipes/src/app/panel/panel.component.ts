import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-panel]',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ header }} <small *ngIf="impure">(Impure)</small></h5>
        <p class="card-text">
          <ng-content></ng-content>
        </p>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class PanelComponent {
  @Input() header: string;
  @Input() impure: boolean;
}
