// modele.exports=(req, res, next)=>{
//     res.header('Content-Range', 'posts 0-20/20')
//     next()
// }

module.exports = (req, res, next) => {
    res.header('Content-Range', 'posts 0-20/20')
    next()
  }