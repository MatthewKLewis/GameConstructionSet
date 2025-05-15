import { Component } from '@angular/core';
import { NPCService } from '../services/npc.service';

@Component({
  selector: 'app-religion',
  standalone: true,
  imports: [],
  templateUrl: './religion.component.html',
  styleUrl: './religion.component.scss',
})
export class ReligionComponent {
  constructor(public npcService: NPCService) {
    this.npcService.GetAllReligions().subscribe();
  }
}
