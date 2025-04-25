import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  user = {
    name: '',
    email: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}
