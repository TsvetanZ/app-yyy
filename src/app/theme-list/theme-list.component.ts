import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  themeLists: ITheme[] | null = null;

  ngOnInit(): void {

   this.apiService.loadThemes().subscribe({
    next: (value) => {
      this.themeLists = value;
    },

    error: (err) => {
      console.error(err);
    } 
   });

  }

}
