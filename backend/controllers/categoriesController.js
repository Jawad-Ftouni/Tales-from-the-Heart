import { Category } from "../models/categoriesModel.js";

export let addCategory = async (req, res) => {
  try {
    console.log(req.body.description);
    let addedCategory = await Category.create({
      name: req.body.name,
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
    });

    console.log(addedCategory);
    res.send("category added");
  } catch (error) {
    console.log(error.message);
    res.send("cant add category");
  }
};

export let deleteCategories = async (req, res) => {
  try {
    let deletedCategories = await Category.destroy();
    console.log(deletedCategories);
    res.send("all categories deleted");
  } catch (error) {
    console.log(error.message);
    res.send("cant delete categories");
  }
};
