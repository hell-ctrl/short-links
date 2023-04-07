import {
  verifyUrl,
  saveUrl,
  getOriginalUrl,
} from "../services/shortLinkServices";
import { Request, Response } from "express";
import shortId from "shortid";

const regexLink =
  /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:www\.)?(?:(?:(?:[a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)+(?:[a-z]{2,}|xn--[a-z0-9]+))(?::\d{2,5})?(?:\/[\S]*)?$/i;

const shortLink = async (req: Request, res: Response) => {
  try {
    const url: string = req.body.url;
    if (!regexLink.test(url)) {
      return res.status(400).json({ message: "invalid url" });
    }

    const existsInDB = await verifyUrl(url);

    if (!existsInDB) {
      const id: string = shortId.generate();
      await saveUrl(url, id);
      return res.status(200).json({
        original_url: url,
        url_shorted: `${req.protocol}://${req.hostname}/${id}`
      });
    }

    res.status(200).json({
      original_url: url,
      url_shorted:  `${req.protocol}://${req.hostname}/${existsInDB.url_shorted}`
    });
  } catch {
    res.status(500).json({ message: "an error has occurred" });
  }
};

const redirectToOriginalUrl = async (req: Request, res: Response) => {
  try {
    const urlShortedId: string = req.params.id;
    
    const url: string = await getOriginalUrl(urlShortedId);

    res.redirect(url);
  } catch {
    res.status(500).json({ message: "an error has occurred" });
  }
};
export { shortLink, redirectToOriginalUrl };
