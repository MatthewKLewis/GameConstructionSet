import { DB_CONNECTOR } from '../../core/configs';
import { Religion } from '../../core/interfaces';

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
      FROM MKLGame.dbo.tblReligion
      `,
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let religions = queryResult.recordset.map((rec: any) => {
            let religion: Religion = {
              ID: rec.ID,
              Name: rec.Name,
            };
            return religion;
          });
          return response.json(religions);
        }
      }
    );
    sql.close();
  });
});

module.exports = router;
