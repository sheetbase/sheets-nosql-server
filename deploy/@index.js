/**
 * A Sheetbase Module
 * Name: @sheetbase/sheets-nosql-server
 * Export name: SheetsNosql
 * Description: Using Google Sheets as NoSQL database.
 * Version: 0.0.5
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/sheets-nosql-server.git
 */

function load() {
  return SheetsNosql.sheetsNosql({
    databaseId: "1Zz5kvlTn2cXd41ZQZlFeCjvVR_XhpUnzKlDGB8QsXoI"
  });
}
function example1() {
  var DB = load();
  var object = DB.object("/foo/foo-3");
  Logger.log(object);
}

function example2() {
  var DB = load();
  var list = DB.list("/foo/foo-2/content");
  Logger.log(list);
}

function example3() {
  var DB = load();
  var update = DB.update({
    "/foo/foo-6/content": new Date().getTime()
  });
  Logger.log(update);
}
