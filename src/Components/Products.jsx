// import Image1 from '../assets/imgs/airpods.jpg'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Table = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://test-frontend-student.vercel.app/api/products")
            .then((response) => {
                const items = response.data.data?.items || []
                setProducts(items);
                console.log("data has been saved:",items);
            })
            .catch((error) => {
                console.error("has error in bling:", error);
            });
    }, []);
    const handleDelete = (id) => {
        const isConfirmed = window.confirm("هل أنت متأكد من رغبتك في حذف هذا المنتج؟");

        if (isConfirmed) {
            axios.delete(`https://test-frontend-student.vercel.app/api/products/${id}`)
            .then(() => {
                const updatedProducts = products.filter((item) => item.id !== id);
                setProducts(updatedProducts);
            })
            .catch((error) => {
                console.error("delete failed try again", error);
                alert("An error ocurred from the server");
            });
        }
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
        <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm mt-6 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Products Table</h3>
            <div className="w-full overflow-x-auto">

                <table className="w-full text-left min-w-[500px]">
                    <thead>
                        <tr className="border-b border-gray-200 text-gray-500 text-sm bg-[#F0B100]">
                            <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Product</th>
                            <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Category</th>
                            <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Price</th>
                            <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Stock</th>
                            <th className="py-3 px-4 font-semibold text-gray-900 font-bold ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((item)=> {
                            return (
                                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4">
                                        <span className="font-semibold text-gray-800 text-sm">{item.name}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span>{item.category?.name || "No Categ"}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        ${item.price}
                                    </td>
                                    <td className="py-4 px-4">
                                        {item.quantity} in stock
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-start  gap-8 text-gray-400">
                                            <i onClick={() => handleEdit(item.id)} className="fa-solid fa-pen-to-square hover:text-blue-500 cursor-pointer"></i>
                                            <i onClick={() => handleDelete(item.id)} className="fa-solid fa-trash hover:text-red-500 cursor-pointer"></i>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 mt-4 text-sm text-gray-500">
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