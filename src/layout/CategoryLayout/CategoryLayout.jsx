import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const CategoryLayout = () => {
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
        <div className="flex h-screen">
            <div className="navbar-start bg-gray-200 w-[25%] ">
                <div className='p-3 bg-blue-400 font-bold text-2xl text-white text-center'>
                    <h1>COURSE CATEGORIES</h1>
                </div>
                <ul className=''> 
                    {categories.map((category, index) => (
                        <li key={index} className='w-[60%] mx-auto mb-[10px]'>
                            <div
                                className="category cursor-pointer"
                                onClick={() => setOpenCategory(index === openCategory ? null : index)}
                            >
                                {category.name}
                            </div>
                            {openCategory === index && (
                                <ul className="subcategories">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <li key={subIndex} className='my-[6px]'>
                                            <Link>
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
            <Outlet/>
        </div>
    );
};

export default CategoryLayout;
