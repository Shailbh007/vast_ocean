import { useNavigate } from 'react-router-dom';
 function Button({ name, path_name }){
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(path_name); // Use the path_name from props
    };
  
    return (
      <button
        onClick={handleClick}
        className='flex justify-center rounded items-center hover:bg-red-600 delay-75 hover:text-white text-md p-2 bg-black text-white m-2 md:text-xl'
      >
        {name}
      </button>
    );
  };
export default Button