import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('file');

class FileController {
  async create(req, res) {
    return upload(req, res, err => {
      if (err) {
        res.status(400).json({
          errors: [err.code],
        });
      }

      res.json(req.file);
    });
  }
}

export default new FileController();
