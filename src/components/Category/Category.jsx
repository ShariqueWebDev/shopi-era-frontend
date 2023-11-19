import React, { useContext } from 'react'
import "./Category.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products'
import Spinner from '../Spinner/Spinner'
import { Context } from '../../utils/context'

const Category = () => {
  // 4 DIFFERENT CATEGORIES PAGE
  const {id} = useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  const {loading} = useContext(Context)
  // console.log(data);

  return (
    <div className="category-main-content">
    {!!loading ? <Spinner/> :  
    (<div className="layout">
        <div className="category-title">
            <Products products={data?.data} headingVisibility={true} headingText={data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}/>
        </div>
    </div>)}

</div>
  )
}

export default Category
