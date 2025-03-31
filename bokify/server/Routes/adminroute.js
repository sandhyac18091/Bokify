import { Router } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import authenticate from '../Middleware/auth.js'
import book from "../Model/addbook.js";
import upload from "../Middleware/upload.js";
import register from "../Model/signup.js";

dotenv.config()
const adminroute = Router();

const secretkey = process.env.Secretkey;

adminroute.post('/Signup', async (req, res) => {
    try {
        const { Fullname, Username, Email, Password } = req.body;

        
        const existingUser = await register.findOne({ email: Email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already used' });
        }

        const Userrole = Email.endsWith('@admin.com') ? 'Admin' : 'User';
        
        const hashedPassword = await bcrypt.hash(Password, 10);

        
        const newUser = new register({
            fullname: Fullname,
            username: Username,
            email: Email,
            password: hashedPassword,
            userrole: Userrole
        });

        
        await newUser.save();
        res.status(201).json({ message: "Registered Successfully" });

    } catch (error) {
        console.error("Error in Signup:", error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});
adminroute.post('/Login', async (req, res) => {
    try {
        const { Email, Password } = req.body
        const result = await register.findOne({email:Email})
        if (!result) {
            console.log('Enter valid username');

        } else {
            const compare = await bcrypt.compare(Password, result.password)
            console.log(compare);
            console.log(result.userrole);
            if (compare) {
                const token = jwt.sign({ Email: Email, Userrole: result.userrole }, secretkey, { expiresIn: '1hr' })
                console.log(token);
                res.cookie('userToken', token, {
                    httpOnly: true
                })
                res.status(200).json({ message: 'Login successfully' })
            } else {
                res.status(401).json({ message: 'Unauthorised access' })
            }

        }
    } catch {
        res.status(500).send({ message: 'Internal server error' })
    }
})
const convertToBase64 = (buffer) => {
    return buffer.toString('base64');
  };
adminroute.post('/addbook', authenticate,upload.single("bookImage"),async (req, res) => {
    try {
        const { Bookname, Booktype, Description, Price } = req.body
        const existingbook=await book.findOne({bookname:Bookname})
        if (existingbook) {
            res.status(400).json({ msg:"Bookname already exist" });
        }
        else {
            let imageBase64 = null;
      if (req.file) {
        imageBase64 = convertToBase64(req.file.buffer)
      }
            const newUser=new book({
                bookname:Bookname,
                booktype:Booktype,
                description:Description,
                image:imageBase64,
                price:Price
            })
            await newUser.save();
            res.status(201).json({ message:'Book added Successfully' })
            
            
        }
    } catch {
        res.status.json({ message: 'Internal server error' })
    }
})

adminroute.get("/getbooks", async (req, res) => {
    try {
      const books = await book.find(); 
      res.json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  adminroute.get('/getbook/:Bookname', async (req, res) => {
    try {
      const name = req.params.Bookname;
      console.log("Requested book:", name);
  
      if (!name) {
        return res.status(400).json({ msg: "Book name is required" });
      }
  
      const result = await book.findOne({ bookname: name });
  
      if (!result) {
        return res.status(404).json({ msg: "No such book found" });
      }
  
      res.status(200).json({
        Bookname: result.bookname,
        Category: result.booktype,
        Description: result.description,
        Price: result.price,
        imageUrl: result.image ? `/api/getBookImage/${encodeURIComponent(name)}` : null,
      });
  
    } catch (error) {
      console.error("Error fetching book:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  });

  adminroute.get("/getBookImage/:Bookname", async (req, res) => {
    try {
      const name = req.params.Bookname;
      const bookData = await book.findOne({ bookname: name });
  
      if (!bookData || !bookData.image) {
        return res.status(404).json({ msg: "Image not found" });
      }
  
      // Convert Base64 to image format
      const imageBuffer = Buffer.from(bookData.image, "base64");
  
      res.writeHead(200, { "Content-Type": "image/png" }); // Change content type if needed
      res.end(imageBuffer);
    } catch (error) {
      console.error("Error fetching book image:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  });
  
  adminroute.get("books/:category", async (req, res) => {
    try {
      const category = req.params.category.toLowerCase();
      const books = await book.find({ category: { $regex: new RegExp(category, "i") } });
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

adminroute.patch('/editbook',authenticate,async(req,res)=>{
    const{Bookname,Booktype,Price}=req.body
    console.log(Booktype);
    const result=await book.findOne({bookname:Bookname})
    
    if(result){
        result.bookname=Bookname
        result.booktype=Booktype
        result.price=Price
        await result.save()
        res.status(200).json({message:'Book updated successfully'})
    }else{
        res.status(404).json({message:'Book not available'})
    }
    
    
});
adminroute.delete('/deletebook/:Bookname',authenticate,async(req,res)=>{
    try{
        const bookname=req.params.Bookname
    console.log(bookname,'Deleted successfully');
    const books=await book.findOne({bookname:bookname})
    if(!books){
        res.status(404).json({message:'Book not available'})
    }else{
        await book.deleteOne({bookname:bookname})
        res.status(200).json({message:'Book deleted successfully'})
    }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
})


export { adminroute }