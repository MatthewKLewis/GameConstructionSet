export interface Race {
  ID: number;
  Name: string;
}
export interface Religion {
  ID: number;
  Name: string;
}
export interface Family {
  ID: number;
  Name: string;
}
export interface NPC {
  ID: number;
  FirstName: string;
  LastName: string;
  //
  Family?: Family;
  Religion?: Religion;
  Race?: Race;
  //
  WorldID: number;
}
export interface Confirmation {
  ID: number;
  SuccessMessage: string;
  ErrorMessage: string;
  HasError: boolean;
}
