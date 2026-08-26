import type { TeamName } from '../data/fixtures';

export const teamLabel: Record<TeamName, string> = {
  first: 'Firsts',
  reserves: 'Reserves',
  veterans: 'Veterans',
};

export const teamBadgeClass: Record<TeamName, string> = {
  first: 'badge--first',
  reserves: 'badge--reserves',
  veterans: 'badge--veterans',
};
