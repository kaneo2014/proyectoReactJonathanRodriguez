import './ItemListContainer.scss'

const ItemListContainer = ({greeting}) => {
    return(
    <div>
        <h1 style={{color:"green" }}>{greeting}</h1>
    </div>
    )
}
export default ItemListContainer;