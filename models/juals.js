/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juals', {
    JualID: {
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
    OrderJualID: {
      type: DataTypes.STRING(50),
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
    TglJatuhTempo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    JatuhTempo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    AkunBayarKredit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    KartuDebitNominal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    BankIDKartuDebit: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    KeteranganKartuDebit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AkunKartuDebit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    KartuKreditNominal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    BankIDKartuKredit: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    KeteranganKartuKredit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Kembali: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Keterangan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SubTotalQty: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    SubTotalHarga: {
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
    AkunPotongan: {
      type: DataTypes.STRING(25),
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
    AkunPajak: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    AkunBiayaLain: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    BiayaLain: {
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
    AkunDownPayment: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    PembayaranTunai: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AkunPembayaranTunai: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    PembayaranKredit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AkunPembayaranKredit: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Terbayar: {
      type: DataTypes.DECIMAL,
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
    SalesmanID1: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SalesmanID2: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SalesmanID3: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SalesmanID4: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Komisi1: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Komisi2: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Komisi3: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Komisi4: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    JumlahTunai: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    JumlahKredit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PelangganIDBayar: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    AkunBayarTunai: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    IsKasir: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    AkunKomisiPenjualan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsBiayaTotal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AkunZakat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ZakatPct: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ZakatNominal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AkunBayarBiayaLain: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsPending: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    PendingInfo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    AkunKartuKredit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AkunPenjualan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SubTotalHargaSesudahPPN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Pembulatan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AkunPembulatan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JumlahCetak: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Deposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'juals'
  });
};
