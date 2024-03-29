import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm()
    // this.registerService.register().subscribe(res => {
    //   console.log("res", res)
    // })
  }

  initializeForm(): void {
    this.form = this.fb.group({
        username: ['', Validators.required],
        email: '',
        password: ''
      })
  }

  onSubmit(): void {
    console.log(this.form.value)
  }
}
