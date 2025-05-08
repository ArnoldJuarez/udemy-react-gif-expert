import { useState } from "react"


//IMPORTANTE EL GIFEXPERTAPP
import { GifExpertApp } from "../GifExpertApp";



//raftc
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        //console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <=1) return;

        //llamar al setcategories(---)
        //setCategories(categories =>[...categories,inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    //ponemos categories, ya que necesitamos las categorias actuales, y luego se actualizaran

    return (
        <form onSubmit={ onSubmit}>

            <input 
                type="text" 
                value={inputValue} 
                placeholder="Buscar Categoria"
                onChange={onInputChange} />

        </form>


  )
}
