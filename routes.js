'use strict';

let userRoutes = require('./app/routes/user_routes');
let loginRoutes = require('./app/routes/login_routes');
let groupRoutes = require('./app/routes/group_routes');

module.exports = (app) => {
    app.use('/api/v1/user', userRoutes);
    app.use('/api/v1/user', loginRoutes);
    app.use('/api/v1/group', groupRoutes);
    
    
}                                             