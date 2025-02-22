import axios from "axios"

export const  FETCH_PRODUCTS_SUCCESS ="FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE= "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCTS_LOADING="FETCH_PRODUCTS_LOADING";
export const ADD_TO_CART ="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

export const fetchProducts=()=>async (dispatch)=>{
    try{
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch({type:FETCH_PRODUCTS_SUCCESS,payload:response.data})
    }catch (error){
        console.log("error fetching prodcts", error);
    }}

    export const addToCart=(product)=>({
type : ADD_TO_CART,
payload: product,
    })
    
    export const removeFromCart =(id)=>({
        type: REMOVE_FROM_CART,
        payload: id,
    })