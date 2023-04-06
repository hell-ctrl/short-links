import {
  verifyUrl,
  saveUrl,
  getOriginalUrl,
} from "../services/shortLinkServices";
import { Request, Response } from "express";
import shortId from "shortid";

const shortLink = async (req: Request, res: Response) => {
  try {
    const url: string = req.body.url;
    const exists = await verifyUrl(url);

    if (!exists) {
      const id: string = shortId.generate();
      await saveUrl(url, id);
      return res.status(200).json({
        url_shorted: `${req.hostname}/${id}`,
        original_url: url,
      });
    }

    res.status(200).json({
      original_url: url,
      url_shorted: exists.url_shorted,
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
