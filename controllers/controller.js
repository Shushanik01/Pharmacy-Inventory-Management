import {
    categoryModel,
    medicinesModel,
    getManuf,
    addMedicine as addMedicineQuery,
    deleteMedicine,
    getMedicineById,
    updateMedicine as updateMedicineQuery
} from "../database/queries.js";

export async function getAllCategories(req, res) {
    const categories = await categoryModel();

    res.render("categories", {
        categories
    });
};

export function getHomePage(req, res) {
    res.render("indexView");
};

export async function getMedicines(req, res) {
    const medicines = await medicinesModel();
    const categories = await categoryModel();
    const manufacturers = await getManuf();

    res.render("medicines", {
        medicines,
        categories,
        manufacturers
    })
};

export async function getManufacturers(req, res) {
    const man = await getManuf();

    res.render("createdBy", {
        man
    })
};

export async function addMedicine(req, res) {
    await addMedicineQuery(req.body);
    res.redirect('/medicines')
};

export async function removeMedicine(req, res) {
    const { id } = req.params
    await deleteMedicine([id])
    res.redirect('/medicines')
};

export async function removeMedicines(req, res) {
    const ids = [].concat(req.body.ids || []);
    await deleteMedicine(ids)
    res.redirect('/medicines')
};

export async function editMedicineForm(req, res) {
    const { id } = req.params
    const medicine = await getMedicineById(id);
    const categories = await categoryModel();
    const manufacturers = await getManuf();

    res.render("editMedicine", {
        medicine,
        categories,
        manufacturers
    });
};

export async function updateMedicine(req, res) {
    const { id } = req.params;
    await updateMedicineQuery(id, req.body);
    res.redirect('/medicines');
};

export async function renderSignUpPage(req, res){
    res.render('sign-up-form')
}