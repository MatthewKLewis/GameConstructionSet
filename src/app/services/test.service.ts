import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NPC, Race } from '../../../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(public http: HttpClient) {}

  GetAllNPCs(): Observable<NPC[]> {
    return this.http.get('http://localhost:4201/npc/GetAll').pipe(
      map((data: any) => {
        let npcs: NPC[] = data.map((npc: any) => {
          const tempNPC: NPC = {
            ID: npc.ID,
            FirstName: npc.FirstName,
            LastName: npc.LastName,
            RaceName: npc.RaceName,
            WorldID: npc.WorldID,
          };
          return tempNPC;
        });
        return npcs;
      })
    );
  }

  GetAllRaces(): Observable<Race[]> {
    return this.http.get('http://localhost:4201/race/GetAll').pipe(
      map((data: any) => {
        let races: Race[] = data.map((race: any) => {
          const tempRace: Race = {
            ID: race.ID,
            Name: race.Name,
          };
          return tempRace;
        });
        return races;
      })
    );
  }
}
