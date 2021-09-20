const categoryModel = require('../../model/category-model/category.model')
const slugify = require('slugify');

addCategory = ()=>{
    const inputCategory = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.body.parentId){
        inputCategory.parentId = req.body.parentId;
    }
    const _category = new categoryModel(inputCategory);
    _category.save((error,data)=>{
        if(error){
            return res.status(500).json({
                success:false,
                message:"DB Error Occured. Contact your administrator"
            })
        }
        if(data){
            return res.status(200).json({
                success: true,
                message:"Successfully created category",
                data:{data}
            })
        }
    })
}

module.exports={
    addCategory,
}