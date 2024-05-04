import { DB_CONNECTOR } from '../../core/configs';
import { NPC } from '../../core/interfaces';

const express = require('express');
const sql = require('mssql/msnodesqlv8');
const pool = new sql.ConnectionPool(DB_CONNECTOR);

const router = express.Router();

router.get('/GetAll', (req, response) => {
  pool.connect().then(() => {
    pool.request().query(
      `SELECT 
        ID, 
        FirstName, 
        LastName,
        WorldID,
        (Select Name from tblRace r where r.ID = RaceID) as Race,
        (Select Name from tblFamily f where f.ID = FamilyID) as Family,
        (Select Name from tblReligion rel where rel.ID = ReligionID) as Religion
      FROM MKLGame.dbo.tblNPC
      ORDER BY LastName asc
      `,
      (err, queryResult) => {
        if (err) response.send(err);
        else {
          let npcs = queryResult.recordset.map((rec: any) => {
            let npc: NPC = {
              ID: rec.ID,
              FirstName: rec.FirstName,
              LastName: rec.LastName,
              RaceName: rec.Race,
              WorldID: rec.WorldID,
              Family: rec.Family,
              Religion: rec.Religion,
            };
            return npc;
          });
          return response.json(npcs);
        }
      }
    );
    sql.close();
  });
});

module.exports = router;
