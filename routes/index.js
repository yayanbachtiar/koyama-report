var express = require('express');
var router = express.Router();
const models = require('../models/index')
var excelbuilder = require('msexcel-builder');
const path = require('path')
let data = {
  title: 'Express'
}

router.get('/', function (req, res, next) {
  data.title = "Laporan Koyama"
  return models.gruppelanggans.findAll({})
    .then(dt => {
      console.log(dt[0].GrupPelangganID);
      data.kelompok_tani = dt
      res.render('index', data);
    })
});

router.post('/', function (req, res, next) {
  const tanggal = new Date().toDateString().replace(/ /g, '-');
  // console.log(tanggal, req.body, tanggal+'_'+req.body.kelompok+)
  const start_date = req.body.start_date.replace(/\//g, '-')
  const end_date = req.body.end_date.replace(/\//g, '-')
  const title = 'Laporan Tanggal' + tanggal + '-' + start_date + '-sampai-' + end_date + '_' + req.body.kelompok + '.xlsx'
  var workbook = excelbuilder.createWorkbook('./', title)
  var sheet1 = workbook.createSheet('sheet1', 10, 12);
  // Fill some data 
  sheet1.set(1, 1, 'Laporan Per Kelompok Tani');
  sheet1.set(1, 2, 'KT' + req.body.kelompok);
  
  sheet1.set(1, 4, 'Nomor');
  sheet1.set(2, 4, 'Nomor Kapling');
  sheet1.set(3, 4, 'Nama');
  sheet1.set(3, 4, 'Total Belanja Waserda');
  return models.sequelize.query('SELECT TotalAkhir, pelanggans.NamaPelanggan, pelanggans.PelangganID, pelanggans.GrupPelanggan from juals join pelanggans on pelanggans.PelangganID=juals.PelangganID where date(juals.Tanggal) >= "' + start_date + '" AND date(juals.Tanggal) <= "' + end_date + '" AND pelanggans.GrupPelanggan = ' + req.body.kelompok, {
    type: models.Sequelize.QueryTypes.SELECT
  })
  .then(dt => {
    let i=1
    dt.forEach(element => {
      sheet1.set(i, 4+i, i)
      sheet1.set(i, 4+i, element.PelangganID)
      sheet1.set(i, 4+i, element.NamaPelanggan)
      sheet1.set(i, 4+i, element.TotalAkhir)
    });
    workbook.save(function (ok) {
      if (!ok)
      workbook.cancel();
      else
        console.log('congratulations, your workbook created');
        res.download(path.join(__dirname, '../', title), title);
    });
    // res.send(dt)
  })
  // // Save it 
})

module.exports = router;