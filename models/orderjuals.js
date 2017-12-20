/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderjuals', {
    OrderJualID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Tanggal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PelangganID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Jenis: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    DepartemenID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreateUser: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TglKirim: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Keterangan: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    SubTotalItem: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SubTotalTerima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganPct: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PotonganNominal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PajakPct: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PajakNominal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SubTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    TotalAkhir: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    DownPayment: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Kekurangan: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SalesmanID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    AkunDownPayment: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    BiayaLain: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AkunBiayaLain: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    PelangganNama: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PelangganAlamat: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PelangganKota: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PelangganTelepon: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PelangganKontak: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PelangganKeterangan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IsBiayaTotal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AkunBayarBiayaLain: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AkunBayarDownPayment: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SubTotalHargaSesudahPPN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Kirim: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'orderjuals'
  });
};
