import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    displayName: {
      type: String,
      required: [true, "Display name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
    },
    avatar: {
      type: String,
      required: [true, "Avatar is required."],
    },
    moviesWatchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    tvShowsWatchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "TvShow",
      },
    ],
    myMoviesList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    myTvShowsList: [
      {
        type: Schema.Types.ObjectId,
        ref: "TvShow",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
