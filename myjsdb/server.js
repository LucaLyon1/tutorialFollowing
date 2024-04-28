import { createServer } from "net";
import { statSync, writeFileSync, mkdirSync, readdirSync, readFileSync } from "fs";

const port = 3000;
const hostname = '127.0.0.1';

const collections = {};

const folderName = "db";

try {
    statSync(folderName)
} catch (err) {
    mkdirSync(folderName)
}

const filenames = readdirSync(folderName);
for (const file of filenames) {
    const collectionName = file.split('.')[0];
    const collectionFileContent = readFileSync(`${folderName}/${file}`);
    if (collectionFileContent.length !== 0) {
        collections[collectionName] = JSON.parse(collectionFileContent);
    }
}

const server = createServer();
server.listen(port, hostname, () => {
    console.log('listening to port', port);
})

server.on('connection', (sock) => {
    sock.on('data', (data) => {
        const jsonData = JSON.parse(data);
        const collection = getCollection(jsonData.collection);
        let response = "1";

        if (jsonData.insertOne) {
            const _id = new Date().getTime();

            collection[_id] = {
                ...jsonData.insertOne,
                _id,
            }

            saveToFile(jsonData.collection)

            response = JSON.stringify({ insertedId: _id });
        } else if (jsonData.findOne) {
            const filter = jsonData.findOne.filter;
            if (filter._id) {
                const data = collection[filter._id];
                response = JSON.stringify(data);
            }
        } else if (jsonData.updateOne) {
            const filter = jsonData.updateOne.filter;
            if (filter._id) {
                if (collection[filter._id]) {
                    collection[filter._id] = {
                        ...collection[filter._id],
                        ...jsonData.updateOne.data,
                    }
                    saveToFile(jsonData.collection);
                    response = JSON.stringify(collection[filter._id]);
                } else response = JSON.stringify({ err: "This record doesn't exist" })
            } else response = JSON.stringify({ err: "id is mandatory" });
        } else if (jsonData.deleteOne) {
            const filter = jsonData.deleteOne.filter;
            if (filter._id) {
                if (collection[filter._id]) {
                    delete collection[filter._id];
                } else response = JSON.stringify({ err: "this record doesn't exist" })
                saveToFile(jsonData.collection);
                response = JSON.stringify({ message: `${filter._id} has been deleted` })
            } else response = JSON.stringify({ err: "id is mandatory" })
        }

        sock.write(response);
    })
})


function getCollection(collectionName) {
    if (!collections[collectionName]) collections[collectionName] = {};

    return collections[collectionName];
}

function saveToFile(collectionName) {
    writeFileSync(`${folderName}/${collectionName}.json`, JSON.stringify(getCollection(collectionName)));
}