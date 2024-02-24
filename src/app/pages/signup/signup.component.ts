import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
}
