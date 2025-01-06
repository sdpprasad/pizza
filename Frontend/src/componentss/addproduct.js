import { useState } from "react";
import axios from "axios";
function Addproduct(){
    const[formdata,setFormdata]=useState({
        'title':'',
        'rating':'',
        'discount':'',
        'price':'',
        'productpic':''
    })
    console.log(formdata);
    let backend_api="http://localhost:4500/addproduct"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('myfile',formdata.productpic)
        Inputfields.append('title',formdata.title)
        Inputfields.append('rating',formdata.rating)
        Inputfields.append('discount',formdata.discount)
        Inputfields.append('price',formdata.price)
        e.preventDefault();
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res)
            if(res.status===200){
                alert(res.data.msg)
                window.reload()
            }
        }).catch((err)=>{
            console.log(err)
        })
        // if (!formdata.username || !formdata.discount || !formdata.price) {
        //     alert("Please fill in all the fields");
        //     return; 
        //   }
        // axios.post('http://localhost:4444/addform', {formdata}).then((res)=>console.log(res.data))
        // setFormdata({
        //     username: "",
        //     discount: "",
        //     price: "",
        //   });
    }
    return(
        <div className="container">
        <div className="row" style={{width:"1000px"}}>
            <h1>User Form</h1>
            <form onSubmit={handlesubmit} action="post">
            <label>title: </label>
                <input type="text"  name="title" value={formdata.title} onChange={(e)=>setFormdata({...formdata,title:e.target.value})}/>
                <br/>
                <label>Rating: </label>
                <input type="text"  name="rating" value={formdata.rating} onChange={(e)=>setFormdata({...formdata,rating:e.target.value})}/>
                <br/>
                <label>Discount: </label>
                <input type="text"  name="discount" value={formdata.discount} onChange={(e)=>setFormdata({...formdata,discount:e.target.value})}/>
                <br/>
                <label>Price: </label>
                <input type="price"  name="price"  value={formdata.price} onChange={(e)=>setFormdata({...formdata,price:e.target.value})}/>
                <br/>
                <label>Upload image: </label>
                <input type="file"  name="myfile"   onChange={(e)=>setFormdata({...formdata,productpic:e.target.files[0]})}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
        </div>
    )
}
export default Addproduct;
