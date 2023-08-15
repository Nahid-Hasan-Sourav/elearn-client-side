import { useState } from "react";
import AddCategoryModal from "../Modal/AddCategoryModal";

const AddCategory = () => {
    const [modalOpen,setModalOpen]=useState(false);
    const isModalOpen=()=>{
        console.log("Working open button");
        setModalOpen(true);
        console.log(modalOpen)
    }
    const isModalClose=()=>{
        setModalOpen(!true);
    }
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-between p-6 bg-gray-50">
          <h2 className="text-xl font-bold">ALL CATEGORIES</h2>
          <button className="btn" onClick={isModalOpen}>
            open modal
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddCategoryModal
      isOpen={modalOpen}
      onClose={isModalClose}
      ></AddCategoryModal>
    </div>
  );
};

export default AddCategory;
