const ItemLabel = ({label, price}) => {
    return (
        <li className="list-item-1">
        <div className="w-layout-blockcontainer container-28 w-container">
          <div className="text-block-28">
            {label}
          </div>
          <div className="text-block-28 mid">
            ‍<strong>× 1</strong>
          </div>
        </div>
        <div className="w-layout-blockcontainer container-29 w-container">
          <div className="text-block-29">₹{price}</div>
        </div>
      </li>
    )
}

export default ItemLabel