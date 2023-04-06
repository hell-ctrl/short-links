import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  url_shorted: {
    type: String,
    required: true,
  }
});


const Shortlink = mongoose.model("shortLink", shortLinkSchema);

export default Shortlink;