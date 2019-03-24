module.exports = function(sequelize, DataTypes) {
	let subSubCategory = sequelize.define(
		'subSubsubSubCategory',
		{
			subSubId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				field: 'subSubId',
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			subSubName: {
				type: DataTypes.STRING,
				field: 'subSubName',
			},
		},
		{
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			tableName: 'subSubCategory',
		},
	);
	subSubCategory.associate = function(models) {
		subSubCategory.belongsTo(models.Subcategory, {
			foreignKey: 'subSubId',
		});
	};
	return subSubCategory;
};
