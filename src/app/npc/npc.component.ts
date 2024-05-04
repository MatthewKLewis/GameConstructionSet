import { Component, OnInit } from '@angular/core';
import { NPCService } from '../services/npc.service';

@Component({
  selector: 'app-npc',
  standalone: true,
  imports: [],
  templateUrl: './npc.component.html',
  styleUrl: './npc.component.scss',
})
export class NpcComponent implements OnInit {
  constructor(public npcService: NPCService) {}
  ngOnInit(): void {
    this.npcService.GetAllNPCs();
  }
}
