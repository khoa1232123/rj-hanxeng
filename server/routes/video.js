const express = require('express');
const router = express.Router();
const multer = require('multer');
const { User } = require('../models/User');
const { Product } = require('../models/Product');

const { auth } = require('../middleware/auth');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4' || ext !== '.jpg') {
      return cb(res.status(400).end('only mp4 are allowed'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');

//=================================
//             User
//=================================

router.post('/uploadfiles', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post('/thumbnail', (req, res) => {
  let thumbsFilePath = '';
  let fileDuration = '';

  ffmpeg.ffprobe(req.body.filePath, (err, metadata) => {
    console.dir(metadata);
    console.log(metadata.format.duration);
    fileDuration = metadata.format.duration;
  });

  ffmpeg('/path/to/video.avi')
    .on('filenames', (filenames) => {
      console.log('Will general ' + filenames.join(', '));
      thumbsFilePath = 'uploads/thumbnails/' + filenames[0];
    })
    .on('end', () => {
      console.log('Screenshots taken');
      return res.json({ success: true, thumbsFilePath, fileDuration });
    })
    .screenshots({
      count: 3,
      folder: 'uploads/thumbnails',
    });
});

module.exports = router;
