import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import { fetchProducts } from '../redux/basketSlice';
import ItemList from '../components/ItemList';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchBar from '../components/SearchBar'

const Home = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { products, } = useSelector((state: RootState) => state.basket);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const filteredProducts = products.filter((product) => {
  const matchesCategory = category ? product.category === category : true;
  const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());
  return matchesCategory && matchesSearch;
});

  return (
    <>
      <div className=' flex flex-row justify-between  items-center px-10'>

        <span></span>
        <SearchBar onSearchChange={setSearchText} />
        <FormControl sx={{ width: '150px', marginTop: '20px', }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Kategori"
            onChange={handleChange}
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            <MenuItem value={"electronics"}>Electronics</MenuItem>
            <MenuItem value={"women's clothing"}>Women's clothing</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className='flex flex-wrap p-8  '>
        {
          filteredProducts.map((product: any) => (

            <ItemList key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default Home