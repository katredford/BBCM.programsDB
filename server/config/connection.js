const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/bbcm-programs', {
    // process.env.MONGODB_URI || 'mongodb+srv://katie:12345@cluster0.r5x2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
