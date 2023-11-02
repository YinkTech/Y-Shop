import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setItem } from '../redux/actions/action'
import Items from './Items'

const AllItems = () => {
  const dispatch = useDispatch();
  const fetchItem = async () => {
    const response = await axios
      .get("https://dummyjson.com/products?limit=10")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setItem(response.data.products));
  };

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container mx-auto py-4'>
          <div className=" md:p-2 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <Items />
          </div>
    </div>
  )
}

export default AllItems