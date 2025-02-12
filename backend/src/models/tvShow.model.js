import mongoose, { Schema } from "mongoose";

const tvShowSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    episodes: {
      type: Number,
      required: [true, "Episodes Number is required."],
    },
    releaseDate: {
      type: Date,
    },
    maturityRating: {
      type: String,
      required: [true, "Maturity Rating is required."],
    },
    genre: [
      {
        type: String,
      },
    ],
    cast: [
      {
        type: String,
      },
    ],
    directors: [
      {
        type: String,
      },
    ],
    writers: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is Required."],
    },
    VideoFiles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

export const TvShow = mongoose.model("TvShow", tvShowSchema);
