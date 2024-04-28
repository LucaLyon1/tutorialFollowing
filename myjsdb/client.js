import { Socket } from "net";


const port = 3000;
const hostname = '127.0.0.1';

const socket = new Socket();

socket.connect(port, hostname, () => {
    socket.write(JSON.stringify({
        collection: "blocks",
        insertOne: {
            body: "Hello World!"
        }
    }))
    socket.on('data', (data) => {
        console.log(JSON.stringify(data));
    });
});
