export interface IPersona {
  id: number;
  name: string;
  arcana: string;
  description: string;
  image: string;
  level: number;
  strength: number;
  magic: number;
  endurance: number;
  agility: number;
  luck: number;
  weak: string[];
  resists: string[];
  reflects: string[];
  absorbs: string[];
  nullifies: string[];
  dlc: number;
  query: string;
}

export type ResistType = 'wk' | 'rs' | 'rf' | 'ab' | 'nu' | ' ';