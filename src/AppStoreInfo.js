const manifest = require('./manifest');
module.exports = {
    id: manifest.application.name,
    name: manifest.application.displayName,
    application: "true",
    category: "General",
    icon: manifest.application.icon
}