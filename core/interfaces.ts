export interface Race {
  ID: number;
  Name: string;
}

export interface NPC {
  ID: number;
  FirstName: string;
  LastName: string;
  Family: string;
  Religion: string;
  RaceName: Race;
  WorldID: number;
}
