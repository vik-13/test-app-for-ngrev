import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  submit(form: NgForm): void {
    console.log(form.value);
  }
}
