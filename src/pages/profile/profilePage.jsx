import React from 'react'

import style from './profilePage.module.scss'

export const profilePage = () => {
  return (
    <div className='profile_wrapper w45p h100p'>
        <div className={style.profileInfo}>
            <div className={style.userWrap}>
                <div className='d-flex'>
                    <div className='user_photo'>
                        <img src="/img/users/1.jpg" alt="" />
                    </div>
                    <div className='d-flex flex-column justify-between ml-40'>
                        <div className='user_info'>
                            <h2 className='m0'>Dmitriy Ladysnkiy</h2>
                            <span>Description</span>
                        </div>
                        <div className='btn_settings'>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/><path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/></svg>
                                Settings
                            </button>
                        </div>
                    </div>
                </div>
                <div className='tabs w100p' >
                    <ul className='d-flex justify-between clear p0 m0 mt-40'>
                        <li>Article</li>
                        <li>Comments</li>
                        <li>Subscription</li>
                        <li>Draft</li>
                    </ul>
                </div>
    
            </div>
        </div>

        <div className={style.newEntry}>
            <div className='d-flex '>
                <img className='border-round' src="/img/users/1.jpg" width={30} height={30} alt=""  />
                <input type="text" placeholder='New Entry' />
            </div>
        </div>

        <div className={style.allArtc}>
            <div>
                <span>
                You haven’t published any public articles yet.
                </span>
            </div>
        </div>
    </div>
  )
}
