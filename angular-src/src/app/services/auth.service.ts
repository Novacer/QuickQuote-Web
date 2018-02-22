import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  checkUserAvail(username) {
    const body = {
      username: username
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/check', body, {headers: headers})
      .map(resp => resp.json());
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(resp => resp.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(resp => resp.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  updateUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  loadToken() {
    var token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    var string_user = localStorage.getItem('user');
    this.user = JSON.parse(string_user);
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken);

    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(resp => resp.json());
  }

  modifyQuotes(newQuote) {
    let headers = new Headers();
    this.loadToken();
    this.loadUser();

    var quotes = this.user.quotes;
    quotes.push(newQuote);

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken);

    let update = {
      username: this.user.username,
      quotes: quotes
    }

    return this.http.post('http://localhost:3000/users/quote', update, {headers: headers})
      .map(resp => resp.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

}
