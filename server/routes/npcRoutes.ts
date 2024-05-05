import { DB_CONNECTOR } from '../../core/configs';
import { Confirmation, NPC } from '../../core/interfaces';
import { GetXMLStringFromQR } from '../utility/utility';

const express = require('express');
const sql = require('mssql/msnodesqlv8');
const parser = require('xml2js').Parser({
  explicitRoot: true,
  explicitArray: false,
});

const router = express.Router();
const pool = new sql.ConnectionPool(DB_CONNECTOR);

router.get('/GetAll', (req, response) => {
  pool.connect().then(() => {
    pool.request().query(
      //SQL QUERY
      `
      USE MKLGame
      SELECT (
        SELECT
          ID, 
          FirstName, 
          LastName,
          WorldID,
          (Select * from tblRace r where r.ID = RaceID FOR XML PATH('Race'), type),
          (Select * from tblFamily f where f.ID = FamilyID  FOR XML PATH('Family'), type),
          (Select * from tblReligion rel where rel.ID = ReligionID  FOR XML PATH('Religion'), type)
        FROM MKLGame.dbo.tblNPC
        FOR XML PATH('NPCS'), type) 
      FOR XML PATH('ROOT'), type
      `,
      //SQL QUERY
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let xmlString = GetXMLStringFromQR(queryResult);
          parser.parseString(xmlString, function (err, result) {
            if (err) {
              console.log(err);
              return response.json([]);
            } else {
              let npcs = result.ROOT.NPCS.map((rec: any) => {
                let npc: NPC = {
                  ID: rec.ID,
                  FirstName: rec.FirstName,
                  LastName: rec.LastName,
                  Race: rec.Race,
                  WorldID: rec.WorldID,
                  Family: rec.Family,
                  Religion: rec.Religion,
                };
                return npc;
              });
              return response.json(npcs);
            }
          });
        }
      }
    );
    sql.close();
  });
});

router.post('/Create', (req: any, response) => {
  console.log(req.body);
  pool.connect().then(() => {
    pool.request().query(
      //SQL QUERY
      `
      USE MKLGame
      INSERT INTO tblNPC (FirstName, 
        LastName, 
        RaceID, 
        FamilyID, 
        ReligionID, 
        WorldID)
      VALUES ('${req.body.FirstName}', 
        '${req.body.LastName}', 
        ${req.body.Race.ID}, 
        ${req.body.Family.ID}, 
        ${req.body.Religion.ID}, 
        ${req.body.WorldID})
      `,
      //SQL QUERY
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let confirmation: Confirmation = {
            ID: 0,
            SuccessMessage: 'Succesfully Created',
            ErrorMessage: '',
            HasError: false,
          };
          return response.json(confirmation);
        }
      }
    );
    sql.close();
  });
});

module.exports = router;
