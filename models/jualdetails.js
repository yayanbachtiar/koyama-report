/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jualdetails', {
    JualDetailID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    JualID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NoUrut: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ItemID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    KodeItem: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NamaItem: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    QtyPesanan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Qty: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SatuanID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SatuanInfo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Harga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct1: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganNominal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    Total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct2: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct3: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct4: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Saldo: {
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
      allowNull: false,
      defaultValue: '0.00'
    },
    Zakat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    Hpp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'jualdetails'
  });
};
