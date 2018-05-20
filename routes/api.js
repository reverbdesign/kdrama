const scraper = require('ondemandkoreascraper');

exports = module.exports = function (io) {
    io.sockets.on('connection', function (socket) {
        //getSearch()
        socket.on('search:request', async function (query) {
            if (query) {
                let res = await scraper.getSearch(query);
                return io.emit(`search:result/${query}`, res);
            }
        });

        //getSource()
        socket.on('source:request', async function (url) {
            if (url) {
                let src = await scraper.getSource(url);
                return io.emit(`source:result/${url}`, src);
            }
        });
    });
}