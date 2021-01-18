import { NgModule } from '@angular/core';
import { DashboardComponent, TOKEN } from './dashboard.component';
import { TestModule } from './test';
import { TestPipePipe } from '../../components/test-pipe/test-pipe.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    TestPipePipe
  ],
  imports: [
    TestModule
  ],
  exports: [
    DashboardComponent,
    TestModule
  ],
  providers: [{ provide: TOKEN, useValue: false }]
})
export class DashboardModule {}
