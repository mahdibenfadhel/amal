const youtube = require('scrape-youtube');
const express = require('express');
const router = express.Router();
const utf8 = require('utf8');



    router.get('/:filter', async (req, res) => {
        youtube.search(req.params.filter, { type: 'channel' }).then((results) => {
             let r = results.channels.filter(vid => vid.subscribers.length === 7 && !isNaN(vid.subscribers[2]) && !isNaN(vid.subscribers[1]) && !isNaN(vid.subscribers[0]));
r.forEach(e => {
    console.log(e)
    res.write(utf8.encode(e.subscribers)+ ' ' + e.name+ ' ' + e.link + ' ' + '\n')
})
            res.end()
        });
    });


module.exports = router;
