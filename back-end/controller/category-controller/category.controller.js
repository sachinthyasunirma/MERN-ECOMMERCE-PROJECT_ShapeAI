const categoryModel = require('../../model/category-model/category.model')
const slugify = require('slugify');

addCategory = (req,res)=>{

    const inputCategory = {
        name: req.body.name,
        slug: slugify(req.body.name,{lower:true})
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

getCategory = async(req,res) =>{
    try{
        const category = await categoryModel.find({});
        if(category){
            return res.status(200).json({
                success:true,
                message:"Get all category's",
                data:category
            })
        }else{
            return res.json({
                sucess:false,
                message:"Category Empty"
            })
        }
    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"DB Error Occured. Contact your administrator"
        })
    }
}

module.exports={
    addCategory,
    getCategory
}