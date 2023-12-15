import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "../../environments/environment.development"
import { UsersType, HttpUsersListResponse } from '../types/users.type';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public perpage = 6;
  constructor(protected HTTP: HttpClient) { }

  getUsers(page : number): Observable<HttpUsersListResponse> {
    return (this.HTTP.get($environement.apiLink)/users?page)
  }
}

