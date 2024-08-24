import sql from 'mssql';

// Database configuration from environment variables
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Use encryption if your database requires it
        trustServerCertificate: true // Set to true if you have self-signed certificates
    }
};

// Controller to fetch bags within a range
export const getBagByIdQuery = async (req, res) => {
  console.log(req.query);
    const { from, to } = req.query;

    if (!from || !to) {
        return res.status(400).json({ message: 'Missing from or to parameter' });
    }

    try {
        // Connect to the database
        await sql.connect(config);

        // Extract year, type, and number from 'from' and 'to' parameters
        const yearFrom = from.split('/')[0];
        const typeFrom = from.split('/')[1];
        const numberFrom = parseInt(from.split('/')[2], 10);

        const yearTo = to.split('/')[0];
        const typeTo = to.split('/')[1];
        const numberTo = parseInt(to.split('/')[2], 10);

        // Query to fetch the bags
        const query = `
            SELECT *
            FROM bag
            WHERE
                byy = @year
                AND BChr = @type
                AND bno BETWEEN @numberFrom AND @numberTo;
        `;

        const result = await sql.query({
            text: query,
            parameters: [
                { name: 'year', type: sql.VarChar, value: yearFrom },
                { name: 'type', type: sql.VarChar, value: typeFrom },
                { name: 'numberFrom', type: sql.Int, value: numberFrom },
                { name: 'numberTo', type: sql.Int, value: numberTo }
            ]
        });

        // Send the response
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching bag details:', error);
        res.status(500).json({ message: 'Error fetching bag details' });
    } finally {
        // Close the database connection
        await sql.close();
    }
};

// controllers/bagController.js
// const bags = [
//   {
//     bagno: '24/EXP/12989',
//     design: 'PGNL0G36122',
//     color : 'W',
//     orderno: 'SO/24/SOL/310/27',
//     stampint:'PG 7500 LOGO',
//     weight: '1kg',
//     quantity:'1',
//     carat: '22',
//     imageid:'PGRN0G23280',
//     imagepath : '.../assets/images/goldimage.webp'
//   },
//   {
//     bagno: '24/EXP/12345',
//     design: 'PGNL0G36123',
//     color : 'W',
//     orderno: 'SO/24/SOL/311/28',
//     stampint:'PG 7500 LOGO',
//     weight: '1kg',
//     quantity:'1',
//     carat: '22',
//     imageid:'PGRN0G23280',
//     imagepath : '.../assets/images/goldimage.webp'
//   },
//   {
//     bagno: '24/EXP/12367',
//     design: 'PGNL0G36124',
//     color : 'W',
//     orderno: 'SO/24/SOL/312/29',
//     stampint:'PG 7500 LOGO',
//     weight: '1kg',
//     carat: '22',
//     imageid:'PGRN0G23280',
//     quantity:'1',
//   }
// ];

// export const getBagByIdQuery = (req, res) => {
//   const { id } = req.query;
//   const bag = bags.find(b => b.bagno === id);
//   if (bag) {
//     res.json(bag);
//   } else {
//     res.json({ message: 'Bag not found' });
//   }
// };
