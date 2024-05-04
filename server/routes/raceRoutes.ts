import { DB_CONNECTOR } from '../../core/configs';
import { Race } from '../../core/interfaces';

const express = require('express');
const sql = require('mssql/msnodesqlv8');
const pool = new sql.ConnectionPool(DB_CONNECTOR);

const router = express.Router();

router.get('/GetAll', (req, response) => {
  pool.connect().then(() => {
    pool.request().query(
      `SELECT 
        ID, 
        Name 
      FROM MKLGame.dbo.tblRace
      `,
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let races = queryResult.recordset.map((rec: any) => {
            let race: Race = {
              ID: rec.ID,
              Name: rec.Name,
            };
            return race;
          });
          return response.json(races);
        }
      }
    );
    sql.close();
  });
});

module.exports = router;
