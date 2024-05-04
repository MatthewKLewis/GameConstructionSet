export interface Race {
  ID: number;
  Name: string;
}

export interface NPC {
  ID: number;
  FirstName: string;
  LastName: string;
  RaceName: Race;
  WorldID: number;
}
