
const gameScores = [
  {
    nineBallBreak: true,
    breakAndRun: false,
    totalPoints: 5
  },
  {
    nineBallBreak: false,
    breakAndRun: true,
    totalPoints: 3
  },
  {
    nineBallBreak: false,
    breakAndRun: false,
    totalPoints: 6
  },
];

const state = {
  lifetimeData: [],
  gameScores,
};

const emptyState = {
  ballCount: 0,
  nineBallChecked: false,
  nineBallBreak: false,
  gameScores: [],
  lifetimeData: []
}

export default {
  state,
  emptyState,
  gameScores
}