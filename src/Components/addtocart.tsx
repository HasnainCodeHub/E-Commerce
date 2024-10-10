// AddToCart.tsx
interface AddToCartProps {
  onAdd: () => void;
  name: string;
}

export default function AddToCart({ onAdd, name }: AddToCartProps) {
  return (
    <button onClick={onAdd} className="bg-primaryColor text-white p-2 rounded hover:bg-cyan-600">
      {name}
    </button>
  );
}
