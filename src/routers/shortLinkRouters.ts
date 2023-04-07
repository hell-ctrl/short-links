import { Router } from "express";
import { shortLink, redirectToOriginalUrl } from "../controllers/shortLink";

const router = Router();

router.post("/", shortLink);
router.get("/:id", redirectToOriginalUrl);

export default router;
