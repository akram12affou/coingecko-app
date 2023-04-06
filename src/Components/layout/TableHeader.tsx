import React from 'react'
import '../../styles/TableHeader.scss'
function TableHeader() {
  return (
    <div className="table-header">
    <div>#</div>
    <div>Coin</div>
    <div>Price</div>
    <div className="none-res">Volume</div>
    <div className="none-res">Mkt Cap</div>
    <div>Chart</div>
  </div>
  )
}

export default TableHeader