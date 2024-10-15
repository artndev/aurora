import { createArticle, getArticle, updateArticle, deleteArticle, getArticles } from "./controllers/dbController.js"
import { Router } from "express"

const router = Router()
router.get("/:obj", (req, res) => getArticles(req, res))
router.get("/:obj/:id", (req, res) => getArticle(req, res))
router.post("/:obj", (req, res) => createArticle(req, res))
router.patch("/:obj/:id", (req, res) => updateArticle(req, res))
router.delete("/:obj/:id", (req, res) => deleteArticle(req, res))

export default router