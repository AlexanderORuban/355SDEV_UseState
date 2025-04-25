import { useState } from 'react';

const RestaurantForm = ({ addRestaurant }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        cuisine: "",
        rating: 5,
        image: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addRestaurant(formData);
    }

    return (
        <div>
            <h2>Add a Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name='name' required value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name='address' required value={formData.address} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name='phone' required value={formData.phone} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Cuisine:
                    <input type="text" name='cuisine' required value={formData.cuisine} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="number" name='rating' min="0" max="5" required value={formData.rating} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name='image' value={formData.image} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
}

export default RestaurantForm;