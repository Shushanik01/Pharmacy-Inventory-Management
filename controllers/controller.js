import { categoryModel, medicinesModel } from "../database/queries.js";

export async function getAllCategories(req, res) {
    const categories = await categoryModel();

    res.render("categories", {
        categories
    });
};

export function getHomePage(req, res) {
    res.render("indexView");
};

export async function getMedicines(req, res){
    const medicines = await medicinesModel();

    res.render("medicines", {
        medicines
    })
};