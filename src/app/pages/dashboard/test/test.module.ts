import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { ButtonModule } from '../../../components/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    ButtonModule,
    FormsModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {}
