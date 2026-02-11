import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = ({url}) => { // Bas ek hi baar aur props ke saath

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        price: "",
        category: "Salad"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("Submitting to:", url); // Ab ye 'url' prop sahi se kaam karega
        console.log("Data:", data);
        alert("System check: Connection Ready!");
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <div className="price-input-container">
                            <span className="currency-symbol">$</span>
                            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='25' required />
                        </div>
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add