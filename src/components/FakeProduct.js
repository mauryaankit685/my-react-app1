import './NetflixIndex.css';
import {useState, useEffect} from "react";
import ChildComponent from './ChildComponent';
// import NetflixHeader from './NetflixHeader';
// import NetflixRegister from './NetflixRegister';


export function FakeProduct(){
    const [getProduct, setProduct]=useState([]);
    const [getCategory, setCategory]=useState([]);
    const [getCartIteam, setCartIteam]=useState([]);
    const [getCartLength, setCartLength]=useState(0);

    function loadProduct(url){
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            // console.log(data)
        })
        
    }

    function LoadCategory(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(result=>result.json())
        .then(resultData=>{
            setCategory(resultData);
            resultData.unshift("All");
        })
        
    }

    function loadCardIteam(e){
        
        var key_data=e.target.id;
        // alert(key_data);
        fetch("https://fakestoreapi.com/products/"+key_data)
        .then(data=>
            data.json()
        )
        .then(result=>{
            // setCartIteam(result)
            getCartIteam.push(result)
            loadCardLength();
        })
        
        // console.log(getCartIteam)
    }

    function loadCardLength(){
        
        setCartLength(getCartIteam.length);
    }

    function categoryData(e){
        var key_data=e.target.value;
        // alert(key_data)
        if(key_data=='All'){
            loadProduct("https://fakestoreapi.com/products")
        }
        else
            loadProduct("https://fakestoreapi.com/products/category/"+key_data)
    }
    function deleteProduct(e){
        var key_data=e.target.id;

        var lists = getCartIteam.filter(x => {
            // console.log(x.id, key_data);
            return x.id != key_data;
        })
        setCartIteam(lists);
        setCartLength(lists.length)
    }

    useEffect(()=>{
        loadProduct('https://fakestoreapi.com/products');
        LoadCategory();
    },[]) 
    
    // useEffect(()=>{
    //     loadCardIteam();
    // },[getCartLength])
   
    return(
        
        <div className=" p-0">
            
            <div className='col-2'>
                <h2>categories  </h2>
              
                <select onChange={(categoryData)}>
                    
                {
                    getCategory.map(category=>
                        
                        <option value={category} key={category}  className='options'>{category}</option>
                    )
                }
                    
                </select>
            </div>

            <div className='col-4 '>
                <h2>Cart Iteams {getCartLength}</h2>
                <div className='cartIteam'>
                    {
                        
                        getCartIteam.map(cartData=>
                            <div className='cart_iteam'>
                                <dt key={cartData.id}>Id: {cartData.id}</dt>
                                
                                <dt>
                                    <img  key={cartData.id} height={'70px'} src={cartData.image} />
                                </dt>
                                {/* <div onClick={deleteProduct} id={cartData.id} key={cartData.name} className='btn btn-danger m-1 delete_btn'> */}
                                <i onClick={deleteProduct} id={cartData.id} class="bi bi-trash btn-danger"></i>
                                {/* </div> */}
                            </div>
                        )
                        
                    }
                    
                </div>
            </div>
            <div className='row'>
            
                {
                    
                    getProduct.map(product=>
                        
                        <div key={product.id} className='col-sm-3 mb-3 mb-sm-0 p-2 h-100'>
                            <div key={product.id} className='card '>
                                <img src={product.image} className="card-img-top"/>
                                <div className="card-body card_body h-100">
                                    <h5 className="card-title fs-6">{product.title}</h5>
                                    <button id={product.id} key={product.id} onClick={(loadCardIteam)} className="btn btn-primary">Go somewhere</button>
                                </div>
                            </div>
                        </div>
                        
                    )            
                }
                
            </div>
            
        </div>
    )
    
}