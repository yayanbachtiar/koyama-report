/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pelanggans', {
    PelangganID: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    NamaPelanggan: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Alamat: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Kota: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Provinsi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Negara: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    KodePos: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Telepon: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Fax: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Kontak: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NoRek: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RekAN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Bank: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Keterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    LimitPiutang: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    LimitHariPiutang: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    GrupPelanggan: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    TipePotongan: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    NPWP: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Wilayah: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SubWilayah: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Saldo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SaldoAwalBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SaldoMasukBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SaldoKeluarBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Deposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    DepositAwalBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    DepositMasukBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    DepositKeluarBulanan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'pelanggans'
  });
};
