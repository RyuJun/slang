'use client';
import { useMatchByMatchId, useMatchIdsByPuuid } from '@/_service/match/useMatchService';
import React, { Fragment } from 'react';
import { Accordion, AccordionItem, Avatar, Chip, Divider, User } from '@nextui-org/react';

interface MatchListsProps {
  matchIds: string[];
}
enum MatchTeamId {
  RED = 100,
  BLUE = 200,
}
const itemSlot = [0, 1, 2, 3, 4, 5];

function useMatches(matchIds: string[]) {
  return matchIds.map((matchId) => useMatchByMatchId({ matchId }));
}
export const MatchLists = ({ matchIds }: MatchListsProps): React.ReactElement => {
  const matches = useMatches(matchIds);
  return (
    <div>
      <Accordion variant="bordered">
        {matches.map(({ ...props }) => {
          const { data } = props;
          const { info, metadata } = data;

          const teamRed = info.participants.filter((participant: any) => participant.teamId === MatchTeamId.RED);
          const teamBlue = info.participants.filter((participant: any) => participant.teamId === MatchTeamId.BLUE);
          console.log(teamBlue);
          return (
            <AccordionItem
              aria-label="matchId"
              title={
                <Fragment>
                  <div className="flex justify-between">
                    {[teamRed, teamBlue].map((team, i) => {
                      return (
                        <div className="flex flex-col justify-start items-start">
                          <Chip size="sm" color={i === 0 ? 'danger' : 'primary'} className="mb-5">
                            {i === 0 ? 'Red' : 'Blue'}
                          </Chip>
                          {team.map((participant: any) => (
                            <div key={participant.puuid} className="flex mb-1">
                              <User
                                className="flex justify-start mr-2"
                                name={participant.riotIdGameName}
                                description={`${participant.championName}`}
                                avatarProps={{
                                  src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/profileicon/${participant.profileIcon}.png`,
                                  color: i === 0 ? 'danger' : 'primary',
                                  size: 'sm',
                                }}
                              />
                              <div className="flex gap-1">
                                {itemSlot.map((slot) => (
                                  <Avatar key={slot} src={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/item/${participant[`item${slot}`]}.png`} className="w-6 h-6 text-tiny" />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </Fragment>
              }
            >
              안녕하세연
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
