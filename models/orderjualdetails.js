/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderjualdetails', {
    OrderJualDetailID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderJualID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    ItemID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    KodeItem: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    ItemInfo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    NoUrut: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtyPesan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    QtyTerima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Satuan: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Harga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    QtyDasar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    HargaSblmPPN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PPN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'orderjualdetails'
  });
};
