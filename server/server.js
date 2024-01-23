const auth = require("json-server-auth");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);

const rules = auth.rewriter({
    users: 640,
    conversations: 660,
    messages: 660,
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);

/**

"users": [
        {
            "email": "sumit@learnwithsumit.com",
            "password": "$2a$10$CtHS.yCGS80jiuZx8yKEI.5zdiZykHF/6aPTDqpHl6ZqEFGISOHKO",
            "name": "Sumit Saha",
            "id": 1
        },
        {
            "email": "akash@learnwithsumit.com",
            "password": "$2a$10$CtHS.yCGS80jiuZx8yKEI.5zdiZykHF/6aPTDqpHl6ZqEFGISOHKO",
            "name": "Akash Ahmed",
            "id": 2
        },
        {
            "email": "saad@learnwithsumit.com",
            "password": "$2a$10$CtHS.yCGS80jiuZx8yKEI.5zdiZykHF/6aPTDqpHl6ZqEFGISOHKO",
            "name": "Saad Hasan",
            "id": 3
        }
    ],

 */
