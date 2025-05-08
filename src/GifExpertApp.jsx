//raftc
import React from 'react'
import { useState } from 'react';

import { AddCategory,GifGrid } from './components';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) =>{
        
        if ( categories.includes(newCategory)) return;

        //const nuevaSerie = 'Naruto';
        //console.log(newCategory)
        setCategories([newCategory,...categories]);
        //setCategories ( cat => [...cat, 'hola'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        
        onNewCategory={onAddCategory} //propiedad onNewCategory
        
        //setCategories={setCategories}
        
        />
        

        {/* Listado de Gif*/}

    
 
        {categories.map(category => (

                <GifGrid 
                    key={category} 
                    category={category}/> 
        
            )
        )}

    </>
  )
}

///*--<button onClick={onAddCategory}>Agregar</button>--*/