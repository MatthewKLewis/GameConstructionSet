import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  constructor(public apiService: APIService) {
    this.apiService.GetAllRaces().subscribe();
  }
}
