const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;
const STARTING_BALANCE = 100;

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: "----",
  hash: "g3n3515",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: []
};

const REWARD_INPUT = {
  address: "*authorized-reward*"
};

const MINING_REWARD = 50;

module.exports = {
  GENESIS_DATA,
  MINE_RATE,
  STARTING_BALANCE,
  MINING_REWARD,
  REWARD_INPUT
};
