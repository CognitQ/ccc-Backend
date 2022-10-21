const express = require('express');
const UserModel = require('../model/UserModel');
const CityModel = require('../model/CityModel');
const RestaurantModel = require('../model/Restaurant');
const PlaceModel = require('../model/PlaceModel');

const ActivityModel = require('../model/ActivityModel');
const GasModel = require('../model/GasModel');
const ImageModel = require('../model/ImageModel');
const multer = require('multer');
const router = express.Router()

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// set Storage

const Storage = multer.diskStorage(
    {destination:'uploads',
     filename:(req,file,cb)=>{
         cb(null,file.originalname);
     },
 }
 )
 
 const upload = multer({
     storage : Storage
 }).single('testImage')
 

//get data
router.get('/', async (req, res)=>{
    try{
        const users = await UserModel.find()
        res.json(users)
    }catch(err){
        console.log({massage:err})
    }
})

router.get('/gas', async (req, res)=>{
    try{
        const gas = await GasModel.find()
        res.json(gas)
    }catch(err){
        console.log({massage:err})
    }
})

router.get('/activities', async (req, res)=>{
    try{
        const activity = await ActivityModel.find()
        res.json(activity)
    }catch(err){
        console.log({massage:err})
    }
})

router.get('/restaurant', async (req, res)=>{
    try{
        const restaurant = await RestaurantModel.find()
        res.json(restaurant)
    }catch(err){
        console.log({massage:err})
    }
})

router.get('/places', async (req, res)=>{
    try{
        const places = await PlaceModel.find()
        res.json(places)
    }catch(err){
        console.log({massage:err})
    }
})

router.get('/cities', async (req, res)=>{
    try{
        const cities = await CityModel.find()
        res.json(cities)
    }catch(err){
        console.log({massage:err})
    }
})
//data send
router.post('/', (req, res) =>{
   const user = new UserModel({
    title:req.body.title,
    description:req.body.description,
   })
   user.save().then(data=>res.send(data)).catch(err => console.error(err, 'failed to save'))
})

// router.post('/Cities', (req, res) =>{
//     const cities = new CityModel({
//      name:req.body.cityname,
//     })
//     cities.save().then(data=>res.send(data)).catch(err => console.error(err, 'failed to save'))
//  })

// router.post('/Gas', (req, res) =>{
//     const gas = new GasModel({
//      name:req.body.gasname,
//      number:req.body.gasnumber,
//      address:req.body.gasaddress,
//      url:req.body.gasurl,

//     })
//     gas.save().then(data=>res.send(data)).catch(err => console.error(err, 'failed to save'))
//  })

router.post('/imageupload',(req, res) =>{
    upload(req, res,(err)=>{
       
        
            const newImage = new ImageModel({
            name:req.body.name,    
            image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }    
            })
        
            newImage.save()
              .then(()=>res.send("Image Uploaded"))
              .catch((err)=>console.log(err));
    })
})

module.exports = router