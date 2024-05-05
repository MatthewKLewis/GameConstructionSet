import { Component } from '@angular/core';
import { NPCService } from '../../services/npc.service';

@Component({
  selector: 'app-npc-create',
  standalone: true,
  imports: [],
  templateUrl: './npc-create.component.html',
  styleUrl: './npc-create.component.scss',
})
export class NpcCreateComponent {
  constructor(public npcService: NPCService) {
    npcService.GetAllRaces();
  }
}
