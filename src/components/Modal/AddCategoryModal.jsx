const AddCategoryModal = ({ isOpen, onClose }) => {
  console.log("This from add category pages :",isOpen)
  return (
    <>
      {isOpen && (
        <div id="my_modal_3" className="fixed top-[10%] left-[40%] visible w-screen h-screen bg-[#ffffff20] opacity-100 z-10">
        <form className="modal-box">
          <button type="button" onClick={onClose} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </div>
      )}
    </>
  );
};

export default AddCategoryModal;
