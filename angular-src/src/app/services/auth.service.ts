import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }


  // checkUserAvail(string) checks if the username is not taken in the database
  checkUserAvail(username) {
    const body = {
      username: username
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('users/check', body, {headers: headers})
      .map(resp => resp.json());
  }


  // registerUser(Object) registers user in the database
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('users/register', user, {headers: headers})
      .map(resp => resp.json());
  }


  // authenticateUser(Object) checks if the user has the valid credentials
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(resp => resp.json());
  }


  // storeUserData(string, Object) saves the token and user in the localStorage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  // updateUserData(Object) saves the user to localStorage
  updateUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }


  // loadToken() reads the current token from localStorage
  loadToken() {
    var token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  // loadUser() reads the current token from localStorage
  loadUser() {
    var string_user = localStorage.getItem('user');
    this.user = JSON.parse(string_user);
  }


  // getProfile() returns the user's profile by making a HTTP GET request with
  //   the token in the header
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken);

    return this.http.get('users/profile', {headers: headers})
      .map(resp => resp.json());
  }


  // addQuotes(Object) adds the newQuote to the user's quotes in MongoDB
  addQuotes(newQuote) {
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

    return this.http.post('users/quote', update, {headers: headers})
      .map(resp => resp.json());
  }


  // removeQuotes(Array) overwrites the user's quotes in MongoDB with the newQuotes
  removeQuotes(newQuotes: any[]) {
    let headers = new Headers();
    this.loadToken();
    this.loadUser();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken);

    let update = {
      username: this.user.username,
      quotes: newQuotes
    }

    return this.http.post('users/quote', update, {headers: headers})
      .map(resp => resp.json());
  }


  // logout() clears the localStorage
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  // loggedIn() returns true if the token is valid, false otherwise
  loggedIn() {
    return tokenNotExpired('id_token');
  }

}
