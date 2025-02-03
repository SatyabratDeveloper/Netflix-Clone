import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
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
    duration: {
      type: Number,
      required: [true, "Duration is required."],
    },
    releaseDate: {
      type: Date,
    },
    maturityRating: {
      type: String,
      required: true,
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
    VideoFile: {
      type: String,
      required: [true, "Video is Required."],
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
