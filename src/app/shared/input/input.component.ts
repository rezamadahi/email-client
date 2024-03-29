import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() control: any = new FormControl('');
  @Input() type:string = 'text';
  @Input() controlType = 'input';

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
