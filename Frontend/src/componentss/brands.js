

function Brands(){
    return(
        // <div className='container' style={{backgroundColor:"red",marginTop:"2rem"}}>
        //     <h3>Brands We Repair</h3>
        //     <div className='row'>
        //         <div className="col-md-1 ">
        //             <div class="card" style={{width: '10rem',marginTop:"5px"}}>
        //                 <img src="https://i.pinimg.com/564x/31/98/fc/3198fc856619261e439a553d8b6dd83f.jpg" class="card-img-top" alt="..." style={{}}/>
        //             </div>

        //         </div>
        //         <div className="col-md-1 "style={{marginLeft:"4rem"}}>
        //             <div class="card" style={{width: '10rem',marginTop:"5px",height:""}}>
        //                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_V_5MaU5gPO_G81zXwrp3j7nD2EpJfTatTrTDzxoOq1h7y_DbMx3toKK7y1p0VyS1wU&usqp=CAU" alt="..." style={{height:"90px"}}/>
        //             </div>

        //         </div>
        //  
        //         
               
               
                
             

        //     </div>
        // </div>
        <div className="container">
            <h3 style={{marginTop:"1.5rem"}}>Brands We Repair</h3>
            <div className="row">
                <div className="col-md-1">
                <img src="https://www.tvhut.com.bd/image/cache/catalog/brand-logo/samsung-logo-200x200.jpg.webp" alt="" style={{height:"90px",width:"100px",border:"0px"}}/>

                </div>
                <div className="col-md-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf1OXPI10axW5DaIwJpc7uwrnV_6wlZR0qaYOMmYxnU91wuuLKhZCV62o0L62VY2YVWc&usqp=CAU"  alt="..." style={{height:"90px",width:"100px",border:"0px"}}/>

                </div>
                <div className="col-md-1">
               <img src="data:image/png;base64,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" class="card-img-top" alt="..." style={{height:"40px",width:"100px",border:"0px",marginTop:"1.5rem"}}/>

                </div>
                <div className="col-md-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_V_5MaU5gPO_G81zXwrp3j7nD2EpJfTatTrTDzxoOq1h7y_DbMx3toKK7y1p0VyS1wU&usqp=CAU" alt="..." style={{height:"40px",width:"100px",border:"0px",marginTop:"1.5rem"}}/>

                </div>
                <div className="col-md-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyY6PcE2WNJCI0QdLwFLDXDWLIAXm_xMnEsDdUutaQJorMR7N6-BxueYosZer_TWXBjgM&usqp=CAU" alt="" style={{height:"40px",width:"100px",border:"0px",marginTop:"1.5rem"}}/>

                </div>
                <div className="col-md-1">
                 <img src="https://i.pinimg.com/564x/31/98/fc/3198fc856619261e439a553d8b6dd83f.jpg" class="card-img-top" alt="..." style={{height:"40px",marginTop:"1.5rem",border:"0px"}}/>

                </div>
                <div className="col-md-1">
                <img src="https://www.gizchina.com/wp-content/uploads/images/2022/01/250000058cbb4c7bae2d056eb8f5d1b5.jpg" class="card-img-top" alt="..." style={{height:"40px",marginTop:"1.5rem",width:"200px",border:"0px"}}/>

                </div>
            </div>


        </div>

        
    )
     
  

                
                



        
    
}
export default Brands;