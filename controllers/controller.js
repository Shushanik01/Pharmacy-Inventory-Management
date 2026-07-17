import { categoryModel } from "../database/queries.js";

export async function getAllCategories(req, res) {
    const categories = await categoryModel();

    res.render("categories", {
        categories
    });
};

export function getHomePage(req, res) {
    res.render("indexView");
}