import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Content.module.scss'

const Content = ({id, userName, userPhoto, title, postImg, text, btnAdd, Loading, setItems, setIsLoading}) => {
    
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://62331d436de3467dbac8bc42.mockapi.io/item')
      
      setItems(response.data)
      setIsLoading(false)
    }
    
    fetchData()
  }, [])

    const [isFavorite, SetIsFavorite] = useState(false)

const addClick = () => {
    btnAdd({id,userName,userPhoto,title, text})
    SetIsFavorite(!isFavorite)
}

  return (
<>
    {Loading ?
    <div className={style.spin}>
        <svg className={style.spinner} viewBox="0 0 50 50">
            <circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
    </div>

    :

    <div id={id} className={style.wrapper}>
    <div className="article__top d-flex justify-between mb-20">
        <div className="top__wrap d-flex">
            <div className="author__photo">
                <img className={style.userPhoto} src={userPhoto} alt=""/>
            </div>
            <div className='pl-10'>
                <div className="author__name">
                    <span className={style.name}>
                    {userName}
                    </span>
                <button className="subscribe__button ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="13" height="13"><path d="M23,11H21V9a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"/><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><path d="M9,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,9,14Z"/></svg>
                </button>
                </div>
                <div className="article__date">
                    <span className={style.dateAdd}>1 day ago</span>
                </div>
            </div>
        </div>    
            <div className="article__category clear">
                <a className="link__item d-flex" href="/">
                    <div className="link__icon">
                        #
                    </div>
                    <span className="link_text">
                        Category 1
                    </span>
                </a>
            </div>
        
    </div>

    <div className="article__image w100p">
        <img className={style.postImg} height={220} src={postImg} alt=""/>
    </div>

    <h1 className="article__title">
    {title}
    </h1>

    <div className="article__text mb-30 clear">
        <span className="article__short-text">
            {text}
        </span>
        <a href="/" className="article__read-more">
            Read more
        </a>
    </div>

    <div className="article__bottom d-flex justify-between">
        <div className="article__bottom_wrap d-flex">
            <div className="button__bottom">
                <button className="button_comment">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" ><path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07"/><path d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225-.492-.33-.399-1.355-.212-3.404L6.5 17.5"/></svg>                            </button>
            </div>

            <div className={style.BtnFav}>
                <button onClick={addClick} className={isFavorite ? style.btnFavActive : ""}>
                    <svg  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="21" height="21"><path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z"/></svg>                            
                </button>
            </div>
        </div>
        <div className="article__rating d-flex">
            <div className="button__bottom">
                <button className="button__like">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path d="M22.586,18.148,12.707,8.269a1.021,1.021,0,0,0-1.414,0L1.42,18.142.006,16.728,9.879,6.855a3.073,3.073,0,0,1,4.243,0L24,16.734Z"/></svg>
                </button>
            </div>
            <span className="pt-5">0</span>
            <div className="button__bottom">
                <button className="button__dislike">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z"/></svg>
                </button>
            </div>
        </div>

    </div>
    </div>
}
    
    </>     
  )
}

export default Content