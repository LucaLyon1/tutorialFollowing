import { Socket } from "net";

async function run() {
    const port = 3000;
    const hostname = '127.0.0.1';

    const socket = new Socket();
    socket.connect(port, hostname, async () => {
        const { insertedId } = await insertOne(socket, {
            collection: 'blocks',
            data: {
                body: "Hello mister xxx !",
            }
        });
        const note = await findOne(socket, {
            collection: "blocks",
            filter: {
                _id: insertedId,
            }
        })
        console.log(note);

        const update = await updateOne(socket, {
            collection: "blocks",
            filter: {
                _id: insertedId,
            },
            data: {
                body: "Hello mister luca",
                message: "I have been discovered"
            }
        });
        console.log('updated:', update);
        const message = await deleteOne(socket, {
            collection: "blocks",
            filter: {
                _id: "1714308014637"
            }
        })
        console.log(message);
    });

}

function insertOne(socket, { collection, data }) {
    return new Promise((resolve) => {
        socket.once("data", (data) => {
            resolve(JSON.parse(String(data)))
        });

        socket.write(
            JSON.stringify({
                collection,
                insertOne: data,
            })
        );
    });
};
function findOne(socket, { collection, filter }) {
    return new Promise((resolve) => {
        socket.once("data", (data) => {
            resolve(JSON.parse(String(data)))
        });

        socket.write(
            JSON.stringify({
                collection,
                findOne: {
                    filter,
                }
            })
        );
    });
}
function updateOne(socket, { collection, filter, data }) {
    return new Promise((resolve) => {
        socket.once("data", (data) => {
            resolve(JSON.parse(String(data)));
        });

        socket.write(
            JSON.stringify({
                collection,
                updateOne: {
                    filter,
                    data,
                }
            })
        );
    });
}
function deleteOne(socket, { collection, filter }) {
    return new Promise((resolve) => {
        socket.once("data", (data) => {
            resolve(JSON.parse(String(data)));
        });
        socket.write(
            JSON.stringify({
                collection,
                deleteOne: {
                    filter,
                }
            })
        );
    });
}

run();
