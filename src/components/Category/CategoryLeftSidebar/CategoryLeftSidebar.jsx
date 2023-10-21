import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryLeftSidebar = () => {
    const categories = [
        {
            name: 'Web Development',
            subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3'],
        },
        {
            name: 'Digital Marketing',
            subcategories: ['Subcategory 2.1', 'Subcategory 2.2'],
        },
        {
            name: 'Freelncing',
            subcategories: ['Subcategory 3.1'],
        },
    ];
    const [openCategory, setOpenCategory] = useState(false);
    console.log("Watch ",openCategory)
    return (
        <>
             <div className="navbar-start w-[25%] border-r-4">
                <div className='p-3 bg-gray-100  font-bold text-2xl text-black text-center my-[20px]'>
                    <h1>COURSE CATEGORIES</h1>
                </div>
                <ul className=''> 
                    {categories.map((category, index) => (
                        <li key={index} className='w-[60%] mx-auto mb-[10px]'>
                            <Link to={`sub-category`}>
                            <div
                                className="cursor-pointer category"
                                onClick={() => setOpenCategory(index === openCategory ? null : index)}
                            >
                                {category.name}
                            </div> 
                            </Link>
                            {openCategory === index && (
                                <ul className="subcategories">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <li key={subIndex} className='my-[6px]'>
                                            <Link to={`category/sub-category-course`}>
                                            - {subcategory}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CategoryLeftSidebar;