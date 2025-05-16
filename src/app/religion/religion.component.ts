import { Component } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-religion',
  standalone: true,
  imports: [],
  templateUrl: './religion.component.html',
  styleUrl: './religion.component.scss',
})
export class ReligionComponent {
  constructor(public apiService: APIService) {
    this.apiService.GetAllReligions().subscribe();
  }
}
