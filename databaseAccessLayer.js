const database = include("/databaseConnection");

async function getAllUsers() {
  let sqlQuery = `SELECT web_user_id, first_name, last_name, email 
	FROM freedb_comp2350-week4-A01335052.web_user`;

  try {
    const results = await database.query(sqlQuery);
    console.log(results[0]);
    return results[0];
  } catch (err) {
    console.log("Error selecting from todo table");
    console.log(err);
    return null;
  }
}

module.exports = { getAllUsers };
