module.exports = function(sequelize, DataTypes) {
	let Subcategory = sequelize.define(
		'Subcategory',
		{
			subId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				field: 'subId',
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			subName: {
				type: DataTypes.STRING,
				field: 'subName',
			},
			subSubId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				field: 'subSubId',
			},
		},
		{
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			tableName: 'Subcategory',
		},
	);
	Subcategory.associate = function(models) {
		Subcategory.belongsTo(models.Category, { foreignKey: 'subId' });
		Subcategory.hasMany(models.subSubCategory, { foreignKey: 'subSubId' });
	};
	return Subcategory;
};
