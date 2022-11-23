import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn: boolean = false;

  constructor() {}

  // TODO: implement login method
  login(user: string, password: string): void {
    if (user === 'admin' && password === 'admin') {
      this._isLoggedIn = true;
    }
  }

  logout() {
    this._isLoggedIn = false;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
