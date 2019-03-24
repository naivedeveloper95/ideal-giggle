module.exports = function(sequelize, DataTypes) {
	let Products = sequelize.define(
		'Products',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				field: 'id',
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			pname: {
				type: DataTypes.STRING,
				field: 'pname',
			},
			description: {
				type: DataTypes.STRING,
				field: 'description',
			},
			price: {
				type: DataTypes.DOUBLE,
				field: 'price',
			},
			cid: {
				type: DataTypes.STRING,
				field: 'cid',
			},
		},
		{
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			tableName: 'Products',
		},
	);

	Products.associate = function(models) {
		Products.hasMany(models.Category, { foreignKey: 'cid' });
	};
	return Products;
};
