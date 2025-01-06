import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import login from "./model/login";
import shop from "./model/shop";
import product from "./model/product";
import multer from "multer";
// import sendmail from "./sendmail";
import send from "./sendmail";
import userdt from "./signindata";

const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/images', express.static('public/images'))
mongoose.connect('mongodb+srv://prasadreddy7577:YqI41FlGH2UZEFrW@cluster0.ubr8fa6.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>app.listen(4500))
.then(()=>console.log("connected to database and listining to localhost 4500"))
.catch((err)=>console.log(err));
//login
app.post('/addlogin',(req,res,next)=>{
    console.log(req.body)
    const {Name,Email,PhoneNumber,Address,Pizza_type}=req.body.form
    const log=new login({
        Name,Email,PhoneNumber,Address,Pizza_type
    })
    log.save()
    return res.send({"login":log})
})
//add to cart
app.post('/addToCart',(req,res,next)=>{
    console.log(req.body)
    const {imageurl,name,prize}=req.body
    const sho=new shop({
        imageurl,name,prize
    })
    sho.save()
    .then(() => {
        console.log('Item added to cart:', sho);
        return res.status(200).json({ message: 'Item added to cart successfully', shop: sho });
    })
    .catch(error => {
        console.error('Error adding item to cart:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    });
})
app.delete('/deleteshopdata/:id',async(req,res,next)=>{
    let shopdata;
    const id=req.params.id
    try{
        shopdata=await shop.findByIdAndDelete({_id:id})
        if(!shopdata){
            return res.status(404).json({ message: "No shop data found." });
        }
        return res.status(200).json({ message: "Shop data deleted successfully", shopData: shopdata });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({ error: 'Internal Server Error' });
    
    }
})
app.get('/getshopdata',async(req,res,next)=>{
    let shopdata;
    try{
        shopdata=await shop.find();
    }catch(err){
        console.log(err);
    }
    if(!shopdata){
        return res.status(404).json({message:"no shopdata found."})

    }
    return res.status(200).json({shopdata})
    }
)

//products

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  //add product 
  app.post("/addproduct",upload.single("myfile"),async(req, res, next)=>{
    const productpic=(req.file)? req.file.filename:null
    //console.log(req.body.formdata)
    const {title,rating,discount,price} =req.body
    const prod = new product({
        title,
        rating,
        discount,
        price,
        productpic,
      })
    try{
        prod.save()//for saving the data into the database
        return res.status(200).json({ message: 'Product added to cart successfully' });
    }catch(err){
           return res.status(400).json({message:"not uploaded"})
    }      
})
app.get('/getallproduts',async(req,res,next)=>{

let productsdata; 
    try{
        productsdata=await product.find();
    }catch(err){
        console.log(err);
    }
    if(!productsdata){ 

        return res.status(404).json({message:"no student found."})

    }
    return res.status(200).json(productsdata)
})

app.post("/addForm",(req,res,next)=>{
    console.log(req.body.formdata)
    const {name,email,comments}= req.body.formdata
    const smail = new send({
        name,
        email,
        comments
    })
    try{
        smail.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'prasadreddy7577@gmail.com',
              pass: 'YqI4 1FlG H2UZ EFrW'
            }});
          
          var mailOptions = {
            from: 'prasadreddy7577@gmail.com',
            to: email,
            subject: 'sending mails to rectify problems to be solved',
            text: 'Thanks '+name+' for your valuable Feedback we will soon recify your problem. '+comments
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          
    }
    catch{
        // alert("Error")
        // window.location.reload()
    }
    return res.status(200).json({msg:"Inserted",result:smail})
  })
  
  
  
  
  // -----------------------register page-------------------------
  
  app.post('/signup',(req,res,next)=>{
  console.log(req.body.formdata);
  const {fname,lname,username,password,Cpassword}=req.body.formdata;
  const udt =new userdt({
      fname,
      lname,
      username,
      password,
      Cpassword
  })
  try{
      udt.save();
  }
  catch(err){
      console.log(err);
  }
  return res.send({msg:"inserted",result:udt});
  })
  
  
  
  // -----------------------------login code---------------------------
  
  app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
  console.log(username)
    try {
      const user = await userdt.findOne({ username, password });
  
      if (!user) {
        return res.status(404).json({ error: 'Invalid username or password' });
      }
  
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error'});
    }
  });
  


// app.get('/getshopdatabyid/:id',async(req,res,next)=>{
//     const _id=req.params.id;
//     let shopdata; 
//     try{
//         shopdata=await student.findById(_id);
//     }catch(err){
//         console.log(err);
//     }
//     if(!shopdata){ 

//         return res.status(404).json({message:"no student found."})

//     }
//     return res.status(200).json({shopdata})
//     }
// )
// app.put('/updatestudent/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     const{name,rollno,college,branch}=req.body.formdata
//     let stud;

//     try{
//         stud=await student.findByIdAndUpdate
//         (_id,{})
//     }catch(err){
//         console.log(err);
//     }
//     return res.send({msg:"updated","result":shop})

// })


