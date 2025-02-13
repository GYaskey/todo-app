interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
