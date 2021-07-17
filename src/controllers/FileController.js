import multer from 'multer';
import multerConfig from '../config/multer';
import File from '../models/File';

const upload = multer(multerConfig).single('file');

class FileController {
  create(req, res) {
    return upload(req, res, async err => {
      if (err) {
        res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const file = await File.create({ originalname, filename, student_id });

        res.json(file);
      } catch (e) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FileController();
