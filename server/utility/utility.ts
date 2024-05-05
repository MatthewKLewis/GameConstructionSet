export function GetXMLStringFromQR(qR: any): any {
  try {
    return qR.recordset[0][Object.keys(qR.recordset[0])[0]];
  } catch (err) {
    console.log(err);
  }
  return '';
}
