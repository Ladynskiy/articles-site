import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Content from './Content/Content'
import Favourite from './Favourite/Favourite'
import Filter from './Filter/Filter'
import style from './Main.module.scss'
import { profilePage } from '../../pages/profile/profilePage'


const Main = ({search}) => {
  const [items, setItems] = useState([''])
  const [favArt, setFavArt] = useState([])
  const [isLoading, setIsLoading] = useState(true)

   const renderArticles = () => {
     
    return (isLoading ? [...Array(8)] : items.filter((art) => art.title.toLowerCase().includes(search.toLowerCase())))
    .map((art, index) =>  
              <Content 
                items = {items}
                btnAdd = {((obj) => addFav(obj))} 
                key = {index+1} 
                Loading = {isLoading}
                setIsLoading = {setIsLoading}
                setItems = {setItems}
                {...art}
                />
      ) 
  }

  const addFav = (art) => {
    if(favArt.find(obj => obj.id === art.id)) {
      removeFav(art)
    } else {
      setFavArt(prev => [ ...prev, art]) 
    }  
  }

  const removeFav = (obj) => {
    setFavArt((prev)=>prev.filter(p=>p.id !== obj.id))
  }

 
    
  return (
    <div className={style.wrapper}>
        <div className='d-flex content'>
           <Filter /> 


           <Routes>
              <Route path="/" element={<div className="article__post w45p mt-20">
                    {renderArticles() } 
                  </div> } />
              <Route path="profile" element={profilePage()} />
           </Routes>

          
          
          <div className="w27p mt-20">
            <h4 className='m0 text-center'>Reading list</h4>
              {favArt.map((obj, index) => (
                <Favourite remove = {removeFav} key = {index+1} id = {obj.id} userName = {obj.userName} userPhoto = {obj.userPhoto} title = {obj.title} text = {obj.text} />
              ))}
            
          </div>
          
        </div>
      </div>
  )
}

export default Main