'use strict';

import mongoose from 'mongoose';

var TournamentSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  picksStartDate: Date,
  picksEndDate: Date,
  leaderboardUrl: String,
  par: {type: Number, default: 72},
  message: String,
  secretCode: String,
  active: Boolean
});

export default mongoose.model('Tournament', TournamentSchema);
