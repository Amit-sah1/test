import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
  let {cid}=useParams()
  return (
    <>
      <h1>category{cid}</h1>
      sss
    </>
  )
}

export default Category