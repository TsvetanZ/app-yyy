import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { environment } from 'src/environments/environment';
const url = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  loadThemes () {
    return this.httpClient.get(`${url}/themes`)
  }

  loadPosts (limit?:number) {
    return this.httpClient.get(`${url}/posts/${limit ? `?limit=${limit}` : ''}`)
  }
}
