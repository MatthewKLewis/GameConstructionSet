import { DB_CONNECTOR } from '../../core/configs';
import { WorldTile } from '../../core/interfaces';

const express = require('express');
const sql = require('mssql/msnodesqlv8');
const pool = new sql.ConnectionPool(DB_CONNECTOR);

const router = express.Router();

router.get('/GetAll', (req, response) => {
  pool.connect().then(() => {
    pool.request().query(
      `SELECT 
        ID, 
        Type,
        X,
        Y 
      FROM MKLGame.dbo.tblWorldTile
      `,
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let tiles = queryResult.recordset.map((rec: any) => {
            let tile: WorldTile = {
              ID: rec.ID,
              Type: rec.Type,
              X: rec.X,
              Y: rec.Y,
            };
            return tile;
          });
          return response.json(tiles);
        }
      }
    );
    sql.close();
  });
});

module.exports = router;
