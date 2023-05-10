const { DataTypes } = require('sequelize');
// EVENT DRIVER MIRAR ****** 
module.exports = function(sequelize) {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fiscalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comercialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nif: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comercialAddres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fiscalAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'companies',
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
      {
        name: 'email',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' },
        ],
      },
    ],
  });

  Company.associate = function(models) {
  };

  return Company;
};
