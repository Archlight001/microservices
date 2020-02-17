var jimp = require("jimp");
var generateThumb = {
    generateThumbnail: function(req,res){
      jimp
        .read(
          req.body.url
        )
        .then(image => {
          res.send (image
            .resize(256, 256)
            .quality(60)
            .write("thumbnail.jpg"));
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });
    }
};

module.exports = generateThumb;