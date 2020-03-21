const userRoutes = (app, fs) => {
    const dataPath = './data/customer.json';
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
            fs.readFile(filePath, encoding, (err, data) => {
                if (err) {
                    throw err;
                }
             callback(returnJson ? JSON.parse(data) : data);
            });
        };
    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
                if (err) {
                    throw err;
                }
               callback();
            });
        };
    app.get('/customer', (req, res) => {
            fs.readFile(dataPath, 'utf8', (err, data) => {
                if (err) {
                    throw err;
                }
       res.send(JSON.parse(data));
            });
        });
    app.post('/customer', (req, res) => {
    readFile(data => {
                const newUserId = Object.keys(data).length + 1;
                data[newUserId.toString()] = req.body;
        writeFile(JSON.stringify(data, null, 2), () => {
         res.status(200).send("Customer added successfully");
                });
            },
                true);
        });
      app.put('/customer/:id', (req, res) => {
            readFile(data => {
           const userId = req.params["id"];
                data[userId] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send("customer updated sucessfully");
                });
            },
                true);
        });
    app.delete('/customer/:id', (req, res) => {
      readFile(data => {
                const userId = req.params["id"];
                delete data[userId];
          writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send("customer  removed sucessfully");
                });
            },
                true);
        });
    };
    
    module.exports = userRoutes;