async function getAllCategories(req, res) {
    const categories = await categoryModel.getAllCategories();

    res.render("categories", {
        categories
    });
};