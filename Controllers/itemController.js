
// importing model

const items = require('../Modal/itemSchema')

exports.addItems = async(req,res)=>{
console.log("inside item controller");
const adminID = req.payload
console.log(adminID);

const image = req.file.filename
console.log(image);

const {name , price , details} = req.body
console.log(`${name}, ${price}, ${details}, ${image} ${adminID}`);

try {
    const ExistingItem = await items.findOne({name})

    if(ExistingItem){
        res.status(401).json('item already exist...')
    }
    else{
        const newItem = new items({
           name,price,details,image,adminID
        })
        await newItem.save()
        res.status(200).json(newItem)
    }
} catch (err) {
    res.status(401).json(`Request failed due to ${err}`)
}

}


exports.getallItems = async(req,res)=>{
    const search = req.query.search
    console.log(search);
    const query = {
      name:{
        $regex:search, $options:"i"
      }
    }
    try {
        const allItems = await items.find(query)
        res.status(200).json(allItems)
    } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
    }
}


exports.getAdminItems = async(req,res)=>{
    const adminID = req.payload
    try {
        const adminItems = await items.find({adminID})
        res.status(200).json(adminItems)
    } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
    }
}


// edit-items
exports.adminEditItems = async(req,res)=>{
    const {id} = req.params
    const adminID = req.payload
    const {name,price,details,image} = req.body
    const uploadedItemImage = req.file?req.file.filename:image
    
    try {
        const updateItem = await items.findByIdAndUpdate({_id:id},{name,price,details,image:uploadedItemImage,adminID},{new:true})

        await updateItem.save()
        res.status(200).json(updateItem)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete

exports.deleteItems = async(req,res)=>{
    const {id} = req.params

    try {
        const removeItems = await items.findByIdAndDelete({_id:id})
        res.status(200).json(removeItems)
    } catch (err) {
        res.status(401).json(err)
    }
}

