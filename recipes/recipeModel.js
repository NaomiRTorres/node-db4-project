const db = require('../data/db-config.js');

module.exports = {
    get,
}

function get() {
    return db ('recipes');
}