import { Participant } from '@/_model/matches';

export interface IMatchListsProps {
  matchIds: string[];
}
export enum EMatchTeamId {
  RED = 100,
  BLUE = 200,
}
export type TItemSlots = Extract<keyof Participant, 'item0' | 'item1' | 'item2' | 'item3' | 'item4' | 'item5' | 'item6'>;
