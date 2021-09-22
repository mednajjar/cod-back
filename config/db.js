/**
 * 
 * @param {connection database} package 
 */

exports.db = (package) => {
    package.connect(process.env.DB_CONNECTION,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        .then(() => console.log('connection success!'))
        .catch(() => console.log('connection failed!'))
}