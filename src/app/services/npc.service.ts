import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Family, NPC, Race, Religion } from '../../../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NPCService {
  npc$ = new BehaviorSubject<NPC[]>([]);
  race$ = new BehaviorSubject<Race[]>([]);
  family$ = new BehaviorSubject<Family[]>([]);
  religion$ = new BehaviorSubject<Religion[]>([]);

  constructor(public http: HttpClient) {}

  GetAllNPCs(): Observable<any> {
    return this.http.get('http://localhost:4201/npc/GetAll').pipe(
      map((data: any) => {
        let npcs: NPC[] = data.map((npc: any) => {
          const tempNPC: NPC = {
            ID: npc.ID,
            FirstName: npc.FirstName,
            LastName: npc.LastName,
            Race: npc.Race,
            WorldID: npc.WorldID,
            Family: npc.Family,
            Religion: npc.Religion,
          };
          return tempNPC;
        });
        this.npc$.next(npcs);
        return npcs;
      })
    );
  }

  GetAllRaces(): Observable<any> {
    return this.http.get('http://localhost:4201/race/GetAll').pipe(
      map((data: any) => {
        let races: Race[] = data.map((race: any) => {
          const tempRace: Race = {
            ID: race.ID,
            Name: race.Name,
          };
          return tempRace;
        });
        this.race$.next(races);
      })
    );
  }

  GetAllReligions(): Observable<any> {
    return this.http.get('http://localhost:4201/religion/GetAll').pipe(
      map((data: any) => {
        let religions: Religion[] = data.map((rel: any) => {
          const tempRace: Religion = {
            ID: rel.ID,
            Name: rel.Name,
          };
          return tempRace;
        });
        this.religion$.next(religions);
      })
    );
  }

  CreateNPC(newNPC: NPC): Observable<any> {
    return this.http.post('http://localhost:4201/npc/Create', newNPC);
  }
}
