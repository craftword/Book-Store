import path from 'path';
import { spawn } from 'child-process-promise';
import Sequelize from 'sequelize';
const spawnOptions = { stdio: 'inherit' };
(async () => {
  // Our database URL
  const url = 'mysql://localhost:3306/book-test?user=craftword&password=godword20'
try {
    // Migrate the DB
    await spawn(Sequelize, ['db:migrate', `--url=${url}`], spawnOptions);
    console.log('*************************');
    console.log('Migration successful');
  } catch (err) {
    // Oh no!
    console.log('*************************');
    console.log('Migration failed. Error:', err.message);
    process.exit(1);
  }
process.exit(0);
})();