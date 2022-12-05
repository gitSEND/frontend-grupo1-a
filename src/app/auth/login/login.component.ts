import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  enter() {
    this.auth.login('admin', 'admin');
    this.router.navigateByUrl('/dashboard');
  }
}
