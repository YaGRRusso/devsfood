import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import { Header } from '../../components/Header';
import * as C from './style';
import api from '../../api'
import { CategoryItem } from '../../components/CategoryItem';
import AllCatImg from '../../assets/food-and-restaurant.png'
import ReactTooltip from 'react-tooltip';
import { ProductItem } from '../../components/ProductItem';
import { Modal } from '../../components/Modal';


let searchTimer = null
export default () => {
    // const history = useHistory();
    const [searchInput, setSearchInput] = useState('')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [activeModal, setActiveModal] = useState(true)
    const [activeCat, setActiveCat] = useState('0')
    const [activePage, setActivePage] = useState(1)
    const [activeSearch, setActiveSearch] = useState('')

    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => {
            setActiveSearch(searchInput)
        }, 1000)
    }, [searchInput])

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories()
            if (!cat.error) {
                setCategories(cat.result)
            }
            ReactTooltip.rebuild()
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            const prod = await api.getProducts(activeCat, activePage, activeSearch)
            if (!prod.error) {
                setProducts(prod.result.data)
                setTotalPages(prod.result.pages)
                setActivePage(prod.result.page)
            }
        }
        getProducts()
    }, [activeCat, activePage, activeSearch])

    return (
        <C.Container>
            <Header search={searchInput} onSearch={setSearchInput} img={AllCatImg} />
            {categories.length > 0 &&
                <C.CategoryArea>
                    <p>Selecione uma categoria</p>
                    <C.CategoryList>
                        <CategoryItem id='0' title='Todos' img={AllCatImg} active={activeCat} setActive={setActiveCat} />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                id={item.id}
                                title={item.name}
                                img={item.image}
                                active={activeCat}
                                setActive={setActiveCat} />
                        ))}
                    </C.CategoryList>
                </C.CategoryArea>
            }
            {products.length > 0 &&
                <C.ProductArea>
                    {products.map((item, index) => (
                        <ProductItem
                            key={index}
                            data={item}
                            onClick={() => { alert('oi') }}
                        />
                    ))}
                </C.ProductArea>
            }
            {totalPages > 0 &&
                <C.PaginationArea>
                    {Array(totalPages).fill(0).map((item, index) => (
                        <C.PaginationItem
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => { setActivePage(index + 1) }}
                        >
                            {index + 1}
                        </C.PaginationItem>
                    ))}
                </C.PaginationArea>
            }
            <Modal status={activeModal} setStatus={setActiveModal} />
        </C.Container>
    );
}