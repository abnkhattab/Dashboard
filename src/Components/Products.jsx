// import Image1 from '../assets/imgs/airpods.jpg'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Table = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                setProducts(response.data.products);
                console.log("data has been saved:", response.data.products);
            })
            .catch((error) => {
                console.error("has error in bling:", error);
            });
    }, []);
    const handleDelete = (id)=> {
        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
    };
    const handleEdit = (id) => {
    const newPrice = prompt("Enter New Price:");
        if (!newPrice) return; 

        const updatedProducts = products.map((item) => {
            if (item.id === id) {
                return { ...item, price: newPrice };
            }
            return item;
        });

        setProducts(updatedProducts);
    };
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Products Table</h3>
            
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200 text-gray-500 text-sm bg-[#F0B100]">
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Product</th>
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Category</th>
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Price</th>
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Stock</th>
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Rating</th>
                        <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((item)=> {
                        return (
                            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-3">
                                        <img src={item.thumbnail}
                                        alt={item.title}
                                        className="w-12 h-12 rounded-lg object-contain bg-gray-100 p-1"/>
                                        <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <span>{item.category}</span>
                                </td>
                                <td className="py-4 px-4">
                                    ${item.price}
                                </td>
                                <td className="py-4 px-4">
                                    {item.stock} in stock
                                </td>
                                <td className="py-4 px-4">
                                    <i className="fa-solid fa-star text-yellow-500"></i> {item.rating}
                                </td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center justify-center gap-3 text-gray-400">
                                        <i onClick={() => handleEdit(item.id)} className="fa-solid fa-pen-to-square hover:text-blue-500 cursor-pointer"></i>
                                        <i onClick={() => handleDelete(item.id)} className="fa-solid fa-trash hover:text-red-500 cursor-pointer"></i>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4 text-sm text-gray-500">
                <span>
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, products.length)} of {products.length} entries
                </span>

                {/* buttons */}
                <div className="flex items-center gap-2">
                    {/* last button*/}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-3 py-1 rounded-md border transition ${
                                currentPage === pageNum
                                    ? "bg-blue-600 text-white border-blue-600 font-semibold"
                                    : "border-gray-200 hover:bg-gray-100 text-gray-700"
                            }`}>
                            {pageNum}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;