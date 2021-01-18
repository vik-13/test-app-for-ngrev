import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { ButtonModule } from '../../../components/button';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {}
