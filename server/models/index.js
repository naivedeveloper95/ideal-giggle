const Sequelize = require('sequelize');
const { dbConfig } = require('./../startup');
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig,
);

let models = {};
models.Category = sequelize.import('./Category');
models.Products = sequelize.import('./Products');
models.Subcategory = sequelize.import('./subcategory');
models.subSubCategory = sequelize.import('./subSubCategory');

// models.Category.sync();
// models.Products.sync();
// models.Subcategory.sync();
// models.subSubCategory.sync();

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
module.exports = models;
