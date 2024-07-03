'use client';
import { useMatchesByMatchId } from '@/_service/match/useMatchService';
import React, { Fragment } from 'react';
import { Accordion, AccordionItem, Avatar, Card, CardBody, Chip, User } from '@nextui-org/react';
import { IGET_MATCH_BY_MATCH_ID_OUTPUT } from '@/_model/matches';
import { IMatchListsProps, EMatchTeamId } from './MatchLists.type';
import { itemSlot } from './MatchLists.constant';
import { useParams } from 'next/navigation';
import MatchListItemSkeleton from '../../Skeletons/MatchListItemSkeleton';

export const MatchLists = ({ matchIds }: IMatchListsProps): React.ReactElement => {
  const matches = useMatchesByMatchId({ matchIds });
  const { puuid } = useParams();

  return (
    <div>
      <Accordion variant="bordered">
        {matches.map(({ data, isFetching }) => {
          const { info, metadata } = data as IGET_MATCH_BY_MATCH_ID_OUTPUT;

          const summoner = info.participants.find((participant) => participant.puuid === puuid);
          const teamRed = info.participants.filter((participant) => participant.teamId === EMatchTeamId.RED);
          const teamBlue = info.participants.filter((participant) => participant.teamId === EMatchTeamId.BLUE);

          const isWinner = info.teams.find((team) => team.win)?.teamId === EMatchTeamId.RED ? EMatchTeamId.RED : EMatchTeamId.BLUE;
          const sortedTeams = summoner?.teamId === EMatchTeamId.RED ? [teamRed, teamBlue] : [teamBlue, teamRed];

          if (isFetching) return <AccordionItem key={metadata.matchId} aria-label="matchId" title={<MatchListItemSkeleton />} />;
          return (
            <AccordionItem
              key={metadata.matchId}
              aria-label="matchId"
              title={
                <Fragment>
                  <div className="flex flex-col gap-2">
                    <Chip size="sm" color={isWinner === summoner?.teamId ? 'primary' : 'danger'}>
                      {isWinner === summoner?.teamId ? '승리' : '패배'}
                    </Chip>
                    <div className="flex">
                      <User
                        className="flex justify-start mr-2 w-[150px]"
                        name={summoner?.riotIdGameName}
                        description={`${summoner?.championName}`}
                        avatarProps={{
                          src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/champion/${summoner?.championName}.png`,
                          size: 'sm',
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {itemSlot.map((slot) => (
                      <Avatar key={slot} src={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/item/${summoner?.[slot]}.png`} className="w-6 h-6 text-tiny" />
                    ))}
                  </div>
                </Fragment>
              }
            >
              <div className="flex flex-col gap-3 py-3">
                {sortedTeams.map((team, i) => {
                  const teamName = team[0].teamId === EMatchTeamId.RED ? 'Red팀' : 'Blue팀';
                  const isWin = team[0].teamId === isWinner;
                  return (
                    <Card key={`team_${i}_${metadata.matchId}`}>
                      <CardBody className="flex flex-col justify-start items-start">
                        <Chip size="sm" className="mb-5" color={isWin ? 'primary' : 'danger'}>
                          {`${isWin ? '승리' : '패배'} (${teamName})`}
                        </Chip>
                        {team.map((participant) => {
                          return (
                            <div key={participant.puuid} className="flex mb-1">
                              <User
                                className="flex justify-start mr-2 w-[150px]"
                                name={participant.riotIdGameName}
                                description={`${participant.championName}`}
                                avatarProps={{
                                  src: `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/champion/${participant.championName}.png`,
                                  color: isWin ? 'primary' : 'danger',
                                  size: 'sm',
                                }}
                                classNames={{
                                  name: 'w-full max-w-[110px] overflow-hidden overflow-ellipsis whitespace-pre',
                                }}
                              />
                              <div className="flex items-center gap-1">
                                {itemSlot.map((slot) => (
                                  <Avatar key={slot} src={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}/img/item/${participant[slot]}.png`} className="w-6 h-6 text-tiny" />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
