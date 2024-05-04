import { Component, OnInit } from '@angular/core';
import { NPCService } from '../services/npc.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public npcService: NPCService) {}
  ngOnInit() {
    console.log('homepage');
    this.npcService.GetAllNPCs();
    this.npcService.GetAllRaces();
  }
}
