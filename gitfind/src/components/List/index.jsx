import React from "react";
import './styles.css'; 



function ItemList ({ repo, onRemoveRepo }) {
return (

<div className="item-list">
<strong>{repo.name}</strong> {/* Título do repositório */}
<p>{repo.description}</p> {/* Descrição do repositório */}
<a href={repo.html_url} rel="noreferrer" target="_blank"> Ver Repositório </a>
<br />
<remover href="" onClick={onRemoveRepo}>Remover</remover> {/* Botão para remover o repositório */}
<hr />
</div>
)

}
export default ItemList;