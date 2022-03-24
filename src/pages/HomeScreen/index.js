import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Header } from '../../components/Header';
import * as C from './style';
import api from '../../api'
import { CategoryItem } from '../../components/CategoryItem';
import AllCatImg from '../../assets/food-and-restaurant.png'

export default () => {
    const history = useHistory();
    const [searchInput, setSearchInput] = useState()
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState('0')

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories()
            if (!cat.error) {
                setCategories(cat.result)
            }
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getCategorieItems = async () => {
            const cat = await api.getCategories()
            if (!cat.error) {
                setCategories(cat.result)
            }
        }
        getCategorieItems()
    }, [activeCat])

    return (
        <C.Container>
            <Header search={searchInput} onSearch={setSearchInput} img={AllCatImg} />
            {categories &&
                <C.CategoryArea>
                    <p>Selecione uma categoria</p>
                    <C.CategoryList>
                        <CategoryItem id='0' title='Todas as categorias' img={AllCatImg} active={activeCat} setActive={setActiveCat} />
                        {categories.map((item, index) => (
                            <CategoryItem key={index} id={item.id} title={item.name} img={item.image} active={activeCat} setActive={setActiveCat} />
                        ))}
                    </C.CategoryList>
                </C.CategoryArea>
            }
        </C.Container>
    );
}