var fs = require('fs'),
    path = require('path'),
    sidebar = require('../helpers/sidebar'),
    Models = require('../models');

module.exports = {
    index: function(req, res) {
        var viewModel = {
            image: {
            },
            comments: [
            ]
        };
        sidebar(viewModel,function(viewModel){
            res.render('image', viewModel);
        });
    },
    create: function(req, res) {
        var saveImage = function() {
            var possible = 'abcdefghijklmnopqrstuvwxyz01234567890',
                imgUrl = '';

            for (var i =0; i < 6; i+=1) {
               imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            };

            var tempPath = req.file.path,
                ext = path.extname(req.file.originalname).toLowerCase(),
                targetPath = path.resolve('./public/upload/' + imgUrl + ext);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext ===
                   '.gif') {
                   fs.rename(tempPath, targetPath, function(err) {
                       if (err) throw err;
                       res.redirect('/images/' + imgUrl);
                   });
               } else {
                   fs.unlink(tempPath, function () {
                       if (err) throw err;
                       res.json(500, {error: 'Only image files are allowed.'});
                   });
            }

            // console.log('This is tempPath ', tempPath);
            // console.log('This is ext', ext);
        };

        saveImage();
    },
    like: function(req, res) {
        res.json({likes: 1});
    },
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }
};
