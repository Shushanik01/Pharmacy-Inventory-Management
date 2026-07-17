import { categoryModel } from "../database/queries";

export async function getAllCategories(req, res) {
    const categories = await categoryModel.getAllCategories();

    res.render("categories", {
        categories
    });
};

export function getHomePage(req, res) {
    res.render("index");
}