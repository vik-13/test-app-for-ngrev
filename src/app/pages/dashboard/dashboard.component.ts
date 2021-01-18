import { ChangeDetectionStrategy, Component, InjectionToken } from '@angular/core';

export const TOKEN = new InjectionToken('token');
export const TOKEN2 = new InjectionToken('token2');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: TOKEN, useValue: true },
    { provide: TOKEN2, useValue: { test: '1', test2: '2'} }
  ]
})
export class DashboardComponent {}
