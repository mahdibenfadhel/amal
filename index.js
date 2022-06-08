
const express = require('express');
const youtube = require("scrape-youtube");
const utf8 = require("utf8");
const app = express();
const path = require('path');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/:filter', async (req, res) => {
    youtube.search(req.params.filter, { type: 'channel' }).then((results) => {
        let r = results.channels.filter(vid => vid.subscribers.length === 7 && !isNaN(vid.subscribers[2]) && !isNaN(vid.subscribers[1]) && !isNaN(vid.subscribers[0]));
            res.write(r.name);
    });
});



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
