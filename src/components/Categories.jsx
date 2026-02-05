import categoryWomen from "./../assets/category-women.jpg";
import categoryMen from "./../assets/category-men.jpg";
import categoryKids from "./..//assets/category-kids.jpg";
import categoryAccessories from "./../assets/category-accessories.jpg";

const Categories = () => {

    const categories = [
        { name: "Women", image: categoryWomen, itemCount: 1240 },
        { name: "Men", image: categoryMen, itemCount: 856 },
        { name: "Kids", image: categoryKids, itemCount: 432 },
        { name: "Accessories", image: categoryAccessories, itemCount: 678 },
    ];

    return (
        <div className="categories container">
            <h2>Shop by Category</h2>
            <p>Explore our collections and find pieces that define your style</p>
            <div className="category-container">
                {
                    categories.map((category, index) => (
                        <a href="#">
                            <div className="category-card" key={index}>
                                <img src={category.image} alt={category.name} />
                                <div className="bg-blur"></div>
                                <div className="category-text">
                                    <h3>{category.name}</h3>
                                    <p>{category.itemCount} items</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;