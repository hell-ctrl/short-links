import { Router } from "express";
import { shortLink, redirectToOriginalUrl } from "../controllers/shortLink";

const router = Router();

router.post("/shorten", shortLink);
router.get("/shorted/:id", redirectToOriginalUrl);

export default router;
