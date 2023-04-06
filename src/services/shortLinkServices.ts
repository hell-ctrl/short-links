import Shortlink from "../models/ShortLink";

const verifyUrl = async (url: string) => {
  const urlFromDB = await Shortlink.findOne({ original_url: url });
  return urlFromDB;
};

const saveUrl = (url: string, urlShorted: string) => {
  return Shortlink.create({
    original_url: url,
    url_shorted: urlShorted,
  });
};

const getOriginalUrl = async (urlShortedId: string) => {
  const urlFromDB = await Shortlink.findOne({ url_shorted: urlShortedId });
  return urlFromDB.original_url;
};
export { verifyUrl, saveUrl, getOriginalUrl };
