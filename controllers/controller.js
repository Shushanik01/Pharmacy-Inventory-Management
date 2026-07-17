import { categoryModel, medicinesModel, getManuf } from "../database/queries.js";

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

export async function getManufacturers(req, res){
    const man = await getManuf();

    res.render("createdBy", {
        man
    })
}