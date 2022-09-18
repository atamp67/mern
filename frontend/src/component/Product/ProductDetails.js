import React, {Fragment, useEffect, useState} from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import {useSelector, useDispatch} from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";
import {addItemsToCart} from "../../actions/cartActions";

const ProductDetails = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {product, loading, error} = useSelector(
        (state) => state.productDetails);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (product.Stock <= quantity) 
            return;
        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) 
            return;
        const qty = quantity - 1;
        setQuantity(qty);
    };

    const addToCartHandler = () => {
        dispatch(addItemsToCart(match.params.id, quantity));
        alert.success("Item Added To Cart");
    };
    
    const options = {
        edit: false,
        color: "rgba(20, 20, 20, 0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 5,
        isHalf: true
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, match.params.id, error, alert]);
    console.log(loading);
    console.log(product);
    console.log((product && product._id) == undefined);
    return (
        <Fragment>
            {loading ? (<Loader />) : 
                (<Fragment>
                <div className="ProductDetails">
                    <div>
                        <Carousel>
                            {product.images && 
                                product.images.map((item, i) => {
                                    <img
                                        className="CarouselImage"
                                        key={i}
                                        src={product.images[0].url}
                                        alt={`${i} Slide`}
                                    />
                                })}
                        </Carousel>
                    </div>
                    <div>
                    <div className="detailsBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <span className="detailsBlock-2-span"> {" "} 
                        ({product.numOfReviews} Reviews)
                        </span>
                    </div>
                    <div className="detailsBlock-3">
                        <h1>{`$${product.price}`}</h1>
                        <div className="detailsBlock-3-1">
                            <div className="detailsBlock-3-1-1">
                                <button onClick={decreaseQuantity}>-</button>
                                <input readOnly defaultValue="1" type="number" value={quantity} />
                                <button onClick={increaseQuantity}>+</button>
                            </div>{" "}
                            <button onClick={addToCartHandler}>Add to Cart</button>
                        </div>
    
                        <p>
                            Status: 
                            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                {product.Stock < 1 ? "outStock" : "InStock"}
                            </b>
                        </p>
                    </div>
                    <div className="detailsBlock-4"> 
                        Description : <p>{product.description}</p>
                    </div>
                    <button className="submitReview">Submit Review</button>
                </div>
            </div>
                <h3 className="reviewsHeading">REVIEWS</h3>
            {product.reviews && product.reviews[0] ? (
                <div className="reviews">
                    {product.reviews && 
                        product.reviews.map((review) => <ReviewCard key={review._id} review={review} />)}  
                </div>
            ) : (
                <p className="noReviews">No Reviews Yet</p>
            )}
            </Fragment>)}
        </Fragment>
    );
};

export default ProductDetails;


                    