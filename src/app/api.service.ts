import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';
const url = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  loadThemes () {
    return this.httpClient.get<ITheme[]>(`${url}/themes`)
  }

  loadPosts (limit?:number) {
    return this.httpClient.get<IPost[]>(`${url}/posts/${limit ? `?limit=${limit}` : ''}`)
  }
}
