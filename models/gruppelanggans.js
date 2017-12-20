/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruppelanggans', {
    GrupPelangganID: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    GrupPelangganInfo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Potongan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    LevelHarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'gruppelanggans'
  });
};
