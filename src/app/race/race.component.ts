import { Component, OnInit } from '@angular/core';
import { NPCService } from '../services/npc.service';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  constructor(public npcService: NPCService) {
    this.npcService.GetAllRaces().subscribe();
  }
}
