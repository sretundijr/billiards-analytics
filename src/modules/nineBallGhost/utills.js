
export const localStorageKeys = {
  NINE_BALL_GAME_SESSION: 'NINE_BALL_GAME_SESSION',
  NINE_BALL_GHOST_LIFETIME_DATA: 'NINE_BALL_GHOST_LIFETIME_DATA'
}

export const NINE_BALL_POINT_BONUS = 1;

export const NINE_BALL_GHOST_MAX_BALL_COUNT = 9;

export const nineBallGhostCopy = {
  gameRules: `
  Rack a game of Nine ball as you normally would and break.  Then take ball in hand
  and shoot the balls in order the rack ends when you miss or scracth.  Each ball made is worth one point and a bonus point
  is awarded for making the nine.  If you make the nine on the break, continue normally
  and leave the nine ball down in this scenario the eight ball would be the final ball
  and you still get the bonus point for the nine.  A scratch results in the end of the game
  any balls made on the scratch shot do not count.  Typically players will play 5 or 10
  racks.
  `
}
