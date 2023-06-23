import React from 'react';
import styles from '../Cabecalho/Galeria/Galeria.module.scss';
import fotos from '../Cabecalho/Galeria/fotos.json';

export default function Tags({tags, filtrarFotos, setItens}) {
  return (  
      <div>
        <p>Filtre por tags: </p>
        <ul>
          {tags.map(tag => {
            return(
            <li key={tag} on onClick={() =>filtrarFotos(tag)}>{tag}</li>

          )})}
          <li onClick={() => setItens(fotos)}>Todas</li>

        </ul>
      </div>
  )
}

