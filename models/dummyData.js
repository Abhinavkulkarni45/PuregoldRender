const dummyBagData = [
    { byy: '2024', BChr: 'A', bno: 101, design: 'PGNL0G36122', color: 'W', orderno: 'SO/24/SOL/310/27', stampint: 'PG 7500 LOGO', weight: '1kg', quantity: '1', carat: '22', imageid: 'PGRN0G23280' },
    { byy: '2024', BChr: 'A', bno: 102, design: 'PGNL0G36123', color: 'B', orderno: 'SO/24/SOL/310/28', stampint: 'PG 7500 LOGO', weight: '1.5kg', quantity: '2', carat: '25', imageid: 'PGRN0G23281' },
    { byy: '2024', BChr: 'A', bno: 103, design: 'PGNL0G36124', color: 'R', orderno: 'SO/24/SOL/310/29', stampint: 'PG 7500 LOGO', weight: '2kg', quantity: '3', carat: '30', imageid: 'PGRN0G23282' },
    { byy: '2024', BChr: 'A', bno: 104, design: 'PGNL0G36125', color: 'G', orderno: 'SO/24/SOL/310/30', stampint: 'PG 7500 LOGO', weight: '2.5kg', quantity: '4', carat: '35', imageid: 'PGRN0G23283' },
    { byy: '2024', BChr: 'A', bno: 105, design: 'PGNL0G36126', color: 'Y', orderno: 'SO/24/SOL/310/31', stampint: 'PG 7500 LOGO', weight: '3kg', quantity: '5', carat: '40', imageid: 'PGRN0G23284' },
    { byy: '2024', BChr: 'A', bno: 106, design: 'PGNL0G36122', color: 'W', orderno: 'SO/24/SOL/310/27', stampint: 'PG 7500 LOGO', weight: '1kg', quantity: '1', carat: '22', imageid: 'PGRN0G23280' },
    { byy: '2024', BChr: 'A', bno: 107, design: 'PGNL0G36123', color: 'B', orderno: 'SO/24/SOL/310/28', stampint: 'PG 7500 LOGO', weight: '1.5kg', quantity: '2', carat: '25', imageid: 'PGRN0G23281' },
    { byy: '2024', BChr: 'A', bno: 108, design: 'PGNL0G36124', color: 'R', orderno: 'SO/24/SOL/310/29', stampint: 'PG 7500 LOGO', weight: '2kg', quantity: '3', carat: '30', imageid: 'PGRN0G23282' },
    { byy: '2024', BChr: 'A', bno: 109, design: 'PGNL0G36125', color: 'G', orderno: 'SO/24/SOL/310/30', stampint: 'PG 7500 LOGO', weight: '2.5kg', quantity: '4', carat: '35', imageid: 'PGRN0G23283' },
    { byy: '2024', BChr: 'A', bno: 110, design: 'PGNL0G36126', color: 'Y', orderno: 'SO/24/SOL/310/31', stampint: 'PG 7500 LOGO', weight: '3kg', quantity: '5', carat: '40', imageid: 'PGRN0G23284' },
    { byy: '2024', BChr: 'A', bno: 111, design: 'PGNL0G36125', color: 'G', orderno: 'SO/24/SOL/310/30', stampint: 'PG 7500 LOGO', weight: '2.5kg', quantity: '4', carat: '35', imageid: 'PGRN0G23283' },
    { byy: '2024', BChr: 'A', bno: 112, design: 'PGNL0G36126', color: 'Y', orderno: 'SO/24/SOL/310/31', stampint: 'PG 7500 LOGO', weight: '3kg', quantity: '5', carat: '40', imageid: 'PGRN0G23284' },
    { byy: '2024', BChr: 'A', bno: 113, design: 'PGNL0G36125', color: 'G', orderno: 'SO/24/SOL/310/30', stampint: 'PG 7500 LOGO', weight: '2.5kg', quantity: '4', carat: '35', imageid: 'PGRN0G23283' },
    { byy: '2024', BChr: 'A', bno: 114, design: 'PGNL0G36126', color: 'Y', orderno: 'SO/24/SOL/310/31', stampint: 'PG 7500 LOGO', weight: '3kg', quantity: '5', carat: '40', imageid: 'PGRN0G23284' },
    { byy: '2024', BChr: 'B', bno: 201, design: 'PGNL0G36127', color: 'W', orderno: 'SO/24/SOL/310/32', stampint: 'PG 7500 LOGO', weight: '1kg', quantity: '1', carat: '22', imageid: 'PGRN0G23285' },
    { byy: '2024', BChr: 'B', bno: 202, design: 'PGNL0G36128', color: 'B', orderno: 'SO/24/SOL/310/33', stampint: 'PG 7500 LOGO', weight: '1.5kg', quantity: '2', carat: '25', imageid: 'PGRN0G23286' },
    { byy: '2024', BChr: 'B', bno: 203, design: 'PGNL0G36129', color: 'R', orderno: 'SO/24/SOL/310/34', stampint: 'PG 7500 LOGO', weight: '2kg', quantity: '3', carat: '30', imageid: 'PGRN0G23287' },
    { byy: '2024', BChr: 'B', bno: 204, design: 'PGNL0G36130', color: 'G', orderno: 'SO/24/SOL/310/35', stampint: 'PG 7500 LOGO', weight: '2.5kg', quantity: '4', carat: '35', imageid: 'PGRN0G23288' },
    { byy: '2024', BChr: 'B', bno: 205, design: 'PGNL0G36131', color: 'Y', orderno: 'SO/24/SOL/310/36', stampint: 'PG 7500 LOGO', weight: '3kg', quantity: '5', carat: '40', imageid: 'PGRN0G23289' },
    { byy: '2024', BChr: 'C', bno: 301, design: 'PGNL0G36132', color: 'W', orderno: 'SO/24/SOL/310/37', stampint: 'PG 7500 LOGO', weight: '1kg', quantity: '1', carat: '22', imageid: 'PGRN0G23290' },
    { byy: '2024', BChr: 'C', bno: 302, design: 'PGNL0G36133', color: 'B', orderno: 'SO/24/SOL/310/38', stampint: 'PG 7500 LOGO', weight: '1.5kg', quantity: '2', carat: '25', imageid: 'PGRN0G23291' }
  ];
  
  export default dummyBagData;
  