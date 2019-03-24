module.exports = function(sequelize, DataTypes) {
	let Category = sequelize.define(
		'Category',
		{
			cid: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				field: 'cid',
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			cname: {
				type: DataTypes.STRING,
				field: 'cname',
			},
			subId: {
				type: DataTypes.INTEGER(11),
				field: 'subId',
			},
		},
		{
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			tableName: 'Category',
		},
	);

	Category.associate = function(models) {
		Category.belongsTo(models.Products, { foreignKey: 'cid' });
		Category.hasMany(models.Subcategory, { foreignKey: 'subId' });
	};

	return Category;
};
