import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../shared/main.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class LoginComponent implements OnInit {
  userError: boolean = false;
  passwordError: boolean = false;
  loginError: boolean = false;
  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  
  });


  constructor(private fb: FormBuilder, private mainService: MainService, private router: Router) { }

 

  onSubmit() {
    console.warn(this.loginForm.value);
    
    const loginObj = {'user': this.loginForm.value.user, 'password': this.loginForm.value.password};
    this.mainService.getPostInfo(loginObj).subscribe(data=>{
      console.log(data);
    })
    this.loginError = true;
    this.router.navigateByUrl('dashboard');
  }
  ngOnInit(): void {

    this.mainService.getInfo().subscribe(x=> {
      debugger;
      console.log(x)
    })
    }


    checkValid(field: string){
      switch(field){
        case 'user':
        this.loginForm.value.user == '' ? this.userError = true : this.userError = false;
        break;
        case 'password':
        this.loginForm.value.password == '' ? this.passwordError = true : this.passwordError = false;
        break;
        default:
        this.userError = false;
        this.passwordError = false;    
      }
    
    }

  



}
