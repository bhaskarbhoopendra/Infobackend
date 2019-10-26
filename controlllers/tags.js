const Tags = require('../models/tags');
const slugify = require('slugify');
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.create=(req,res)=>{
    const {name} = req.body;
    let slug = slugify(name).toLowerCase();
    
    let tags = new Tags({name,slug});
    tags.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.list =(req,res)=>{
    Tags.find({}).exec((err,data)=>{
      if(err){
          return res.status(400).json({
              error:errorHandler(err)
          })
      }
      return res.json(data);
  })
}

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Tags.findOne({ slug }).exec((err, tags) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(tags);
    });
};

exports.remove =(req,res)=>{
    const slug = req.params.slug.toLowerCase();
    Tags.findOneAndRemove({slug}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        return res.json({
            message:'Tags Removed Successfully'
        });
    })
}