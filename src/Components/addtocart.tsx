interface AddToCartProps {
    name: string;
    onAdd: () => void; // Function to call when adding to cart
  }
  
  const AddToCart: React.FC<AddToCartProps> = ({ name, onAdd }) => {
    return (
      <button
        className="bg-primaryColor text-white px-4 py-2 rounded"
        onClick={onAdd} // Call the onAdd function when clicked
      >
        {name}
      </button>
    );
  };
  
  export default AddToCart;
  