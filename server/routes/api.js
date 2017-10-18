const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const searchcompanyIds = 'https://api.searchcompany.us/1.0/search/';
const searchcompanyCompany = 'http://api.searchcompany.us/1.0/company/';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send("API'z cool bro");
});

// Get all posts
router.get('/companies-search/:searchString', (req, res) => {
  var searchString = req.params.searchString;
  var companiesResArr = new Array;
  axios.get(`${searchcompanyIds}/${searchString}`)
    .then( axiosRes => {
      compniesObj = axiosRes.data.company;
      compniesObjLength = compniesObj.length > 5 ? 5 : compniesObj.length;
      for( var i = 0; i < compniesObjLength; i++ ){
        axios.get(`${searchcompanyCompany}/${compniesObj[i].id}`)
          .then( axiosCompRes => {
            companiesResArr.push( axiosCompRes.data );
            if (companiesResArr.length == compniesObjLength ){
              res.status(200).json( companiesResArr ); exit;
            }
          })
          .catch(error => {
              res.status(500).send("axiosCompRes:" + error)
          });
      }
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
