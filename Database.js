import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'Moutardiers.db';
const database_version = '1.0';
const database_displayname = 'SQLite Moutardiers Database';
const database_size = 200000;

class Database {
  closeDatabase = (db) => {
    if (db) {
      console.log('Closing DB');
      db.close()
        .then((status) => {
          console.log('Database CLOSED', status);
        })
        .catch((error) => {
          this.errorCB(error);
        });
    } else {
      console.log('Database was not OPENED');
    }
  };

  getList = () => {
    return new Promise((resolve) => {
      const moutardiers = [];
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT m.id, m.shape, m.stamp, m.worth, m.notes, m.image FROM Collection1 m',
              []
            ).then(([_, results]) => {
              console.log('Query completed');
              const len = results.rows.length;
              for (let i = 0; i < len; i++) {
                const row = results.rows.item(i);
                // console.log(`Moutardier ID: ${row.id}, Moutardier shape: ${row.shape}`);
                const { id, shape, stamp, worth, notes, image } = row;
                moutardiers.push({
                  id,
                  shape,
                  stamp,
                  worth,
                  notes,
                  image,
                });
              }
              console.log(moutardiers);
              resolve(moutardiers);
            });
          })
            .then((result) => {
              console.log('RESULT', result);
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  productById = (id) => {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Collection1 WHERE id = ?', [id]).then(([_, results]) => {
              console.log(results);
              if (results.rows.length > 0) {
                const row = results.rows.item(0);
                resolve(row);
              }
            });
          })
            .then((_) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  addItem = (moutardier) => {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('INSERT INTO Collection1 VALUES (?, ?, ?, ?, ?, ?)', [
              moutardier.id,
              moutardier.shape,
              moutardier.stamp,
              moutardier.worth,
              moutardier.notes,
              moutardier.image,
            ]);
          })
            .then((_) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  updateProduct = (id, prod) => {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(
              'UPDATE Product SET prodName = ?, prodDesc = ?, prodImage = ?, prodPrice = ? WHERE prodId = ?',
              [prod.prodName, prod.prodDesc, prod.prodImage, prod.prodPrice, id]
            ).then(([_, results]) => {
              resolve(results);
            });
          })
            .then((_) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  deleteProduct = (id) => {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('DELETE FROM Product WHERE prodId = ?', [id]).then(([_, results]) => {
              console.log(results);
              resolve(results);
            });
          })
            .then((_) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  initDB = () => {
    console.log('SQLITE DROP', SQLite.dropDatabase);
    let db;
    return new Promise((resolve) => {
      console.log('Plugin integrity check ...');
      SQLite.echoTest()
        .then(() => {
          console.log('Integrity check passed ...');
          console.log('Opening database ...');
          SQLite.openDatabase(database_name, database_version, database_displayname, database_size)
            .then((DB) => {
              db = DB;
              console.log('Database OPEN');
              // db.executeSql('DROP TABLE Collection1')
              db.executeSql('SELECT 1 FROM Collection1 LIMIT 1')
                .then(() => {
                  console.log('Database is ready ... executing query ...');
                })
                .catch((error) => {
                  console.log('Received error: ', error);
                  console.log('Database not yet ready ... populating data');
                  db.transaction((tx) => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS Collection1 (id, shape, stamp, worth, notes, image)'
                    );
                  })
                    .then(() => {
                      console.log('Table created successfully');
                    })
                    .catch((_) => {
                      console.log(error);
                    });
                });
              resolve(db);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((_) => {
          console.log('echoTest failed - plugin not functional');
        });
    });
  };
}

export default new Database();
