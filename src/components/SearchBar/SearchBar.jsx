import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   
   const [id, setId] = useState('');

   const handleChange = (event) => {     //event se modifica cuando el ususario escribe algo en el input
   setId(event.target.value);
}

   
   
   
   return (
      <div>
          <input type='search' onChange={handleChange} value={id}/>
          <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
