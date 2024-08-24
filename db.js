import sql from 'mssql';

// Configuration for your database using Windows Authentication
const config = {
  user: 'Abhi',
  password: 'Abhi@0145',
  server: 'localhost',
  database: 'EmrUsrRep',
  options: {
      encrypt: true, // Use encryption if your server requires it
      trustServerCertificate: true // Trust the server's certificate if not using encryption
  }
};

async function main() {
    try {
        // Connect to the database
        await sql.connect(config);

        console.log('Connected to the database.');

        // Perform a query
        const result = await sql.query`SELECT TOP 10 * FROM Bag`;

        console.log('Query result:', result.recordset);

    } catch (err) {
        console.error('Error connecting to the database or executing query:', err);
    } finally {
        // Close the connection
        await sql.close();
    }
}

main();
