const laby = require('./laby.net');

async function test_uuid() {
    console.log('Checking if request by UUID works...');
    console.log(`Badges:\n${await laby.badges('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log(`Role:\n${await laby.role('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log(`Friends:\n${await laby.friends('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log(`Background:\n${await laby.background('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log(`Head:\n${await laby.head('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log(`Skin:\n${await laby.skin('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982')}`);
    console.log('\n');
}

async function test_name() {
    console.log('Checking if request by nickname works...');
    console.log(`Badges:\n${await laby.badges('Niklas')}`);
    console.log(`Role:\n${await laby.role('Niklas')}`);
    console.log(`Friends:\n${await laby.friends('Niklas')}`);
    console.log(`Background:\n${await laby.background('Niklas')}`);
    console.log(`Head:\n${await laby.head('Niklas')}`);
    console.log(`Skin:\n${await laby.skin('Niklas')}`);
    console.log('\n');
}

async function test_server() {
    console.log('Checking if requests for servers works...');
    console.log(`Votes:\n${await laby.votes('gommehd.net')}`);
    console.log('\n');
}

function credits() {
    console.log('Data:\nTest-User: Niklas\nTest-Server: gommehd.net');
}
test_uuid();
setTimeout(async function() {test_name()}, 1000);
setTimeout(async function() {test_server()}, 3000);
setTimeout(function() {credits()}, 4000);