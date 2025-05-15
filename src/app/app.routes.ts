import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NpcComponent } from './npc/npc.component';
import { RaceComponent } from './race/race.component';
import { ReligionComponent } from './religion/religion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'npc', component: NpcComponent },
  { path: 'race', component: RaceComponent },
  { path: 'religion', component: ReligionComponent },
  { path: '**', component: PageNotFoundComponent },
];
