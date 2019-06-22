const mongoose = require('mongoose');
const defaultTo = require('loadsh/defaultTo');

let gracefulShutdown;

mongoose.set('useNewUrlParser', true);

const poolSize = defaultTo(Number(process.env.MONGO_CONNECTION_POOLSIZE), 20);
// Default timeout to 5 minutes
const socketTimeoutMS = defaultTo(
	Number(process.env.MONGO_SOCKET_TIMEOUT_MS),
	300000
);

const dbpath = process.env.MONGODB_PATH;

const createConnection = () => {
	const serverOptions = {
		socketTimeoutMS,
		poolSize
	};

	console.log('Creating Mongo connection', dbpath, serverOptions);
	return mongoose.createConnection(dbpath, {
		...serverOptions
	});
};

const connections = {};
const getConnections = () => connections;

const getConnection = (namespace = 'cc') => {
	if (connections[namespace]) {
		return connections[namespace];
	}

	connections[namespace] = createConnection();
	connections[namespace].on('error', console.error);
	connections[namespace].on('connected', function() {
		console.log('Mongoose connected to ' + dbpath);
	});
	connections[namespace].on('disconnected', function() {
		console.log('Mongoose disconnected');
	});

	return connections[namespace];
};

gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// For nodemon restarts
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});

// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});

module.exports = { getConnection, getConnections };
