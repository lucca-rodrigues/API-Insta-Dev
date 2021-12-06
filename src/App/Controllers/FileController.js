class FileController {
  async create(req, res) {
    const { filename } = req.file;
    return res.status(200).json({ url: `uploads/${filename})` });
  }
}

module.exports = new FileController();
