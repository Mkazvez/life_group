const db = require("../models");
const Email = db.mail;
const Op = db.Sequelize.Op;
const sendEmail = require('../lib/email/send_email.js');

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Name) {
      res.status(400).send({
        message: "ФИО пустое"
      });
      return;
    }
  
    // Create a Email
    const email = {
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Message: req.body.Message,
      Ip: req.body.Ip,
      Adres: req.body.Adres,
      IdAdres: req.body.IdAdres?req.body.IdAdres:0,
      Flat: req.body.Flat,
      FileFull: req.body.FileFull?req.body.FileFull:null,
      // FileMail: req.body.FileMail?req.body.FileMail:null,
    };
  
    // Save Tutorial in the database
    console.log(email)
    Email.create(email)
      .then(data => {
        res.send(data);
        // отправили почту
        sendEmail.send(email);  
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ошибка при создании записи Email."
        });
      });

  };

// Retrieve all Emails from the database.
exports.findAll = (req, res) => {
  const Name = req.query.name;
  var condition = Name ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Email.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ошибка при поиске записи Name."
      });
    });
};

// Find a single Email with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Email.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Email with id=" + id
        });
      });
};

// Update a Email by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Email.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Email was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Email with id=${id}. Maybe Email was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Email with id=" + id
        });
      });
};



// Delete a Email with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Email.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Email was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Email with id=${id}. Maybe Email was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Email with id=" + id
        });
        });
};

// Delete all Emails from the database.
exports.deleteAll = (req, res) => {
    Email.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Email were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all emials."
          });
        });
  
};

// Find all published Tutorials
exports.findAllEmail = (req, res) => {
    const Email = req.query.email;
    var condition = Email ? { Email: { [Op.like]: `%${Email}%` } } : null;
  
    Email.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ошибка при поиске записи Email from email."
        });
      });
};


exports.upload = (req, res) => {
  console.log(req.files)
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
    // accessing the file
  const myFile = req.files.file;
  console.log(__basedir, req.files.file.name)
  //console.log(__basedir, req.files.name)
//   const Excel = require('exceljs')
//   const workbook = new Excel.Workbook(); 
//   const buffer = req.files.file.data
//   //const buffer = req.files.data
   let iqty = 0
//   workbook.xlsx.load(buffer).then(workbook => {
// //      console.log(workbook, 'workbook instance')
//     workbook.eachSheet((sheet, id) => {
//       sheet.eachRow(async (row, rowIndex) => {
//         if (id=1 && rowIndex > 1) {
//           //console.log(row.values, rowIndex)
          
//   // Create a Result
//           let vdate = row.values[2];
//           let dt = new Date()
//           if (typeof vdate === 'string' ) {
//             vdate = vdate.replace(' ', ''); 
//             const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
//             const vyear = vdate.substring(6,10)
//             const vmonth = vdate.substring(3,5)
//             const vday = vdate.substring(0,2)
//             dt = new Date(vyear+'-'+vmonth+'-'+vday)
//             console.log(vyear, vmonth, vday)
//           } else
//           {
//             dt = new Date(vdate)
//           }

//           console.log(row.values[1], rowIndex, 'q'+vdate+'q', dt)
//           const result = {
//             dateResult: dt,
//             Fio: row.values[1],
//             Result: row.values[3],
//             inNumber: '',
//             adrestest: row.values[4],
//           };
        
//           // Save Tutorial in the database
//           await Result.create(result)
//             .then(data => {
//               console.log(data)
//               iqty = iqty+1
//               //console.log(iqty)
//             })
//             .catch(err => {
//                 console.log(err.message)
//               });
//         }
//       })
//     })
//  });
//  console.log('all',iqty)

  return res.status(200).send(req.files.file);
};