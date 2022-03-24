import React from 'react'
import { Link, Outlet} from 'react-router-dom'


import style from './Header.module.scss'

const Header = ({search, setSearch}) => {
  return (
    
    
    <div className={style.header}>
        <div className='wrapper d-flex justify-between h100p pt-10 '>

          
            <div className='logo w27p'>
            <Link to='/'>
              <svg width="136"  height="50" viewBox="0 0 3379.218970864792 1061.8131184214185">
                  <g transform="scale(18.960948543239613) translate(10, 10)">
                      <defs id="SvgjsDefs2491"></defs><g id="SvgjsG2492" featureKey="nameLeftFeature-0" transform="matrix(1,0,0,1,0,5.999996185302734)" fill="#111111"><path d=""></path></g><g id="SvgjsG2493" featureKey="inlineSymbolFeature-0" transform="matrix(0.4235323009226066,0,0,0.4235323009226066,-9.674015828319142,-1.0586487900056765)" fill="#111111"><path xmlns="http://www.w3.org/2000/svg" d="M65.532,53.661c2.473-2.341,2.081-5.645-0.869-7.341L59.1,43.118c-2.95-1.697-4.723-5.797-3.941-9.109l6.699-28.398  c0.781-3.312-0.602-4.108-3.073-1.767L24.467,36.339c-2.472,2.341-2.08,5.644,0.87,7.342l5.562,3.2  c2.949,1.698,4.724,5.798,3.943,9.109l-6.701,28.398c-0.78,3.312,0.602,4.107,3.074,1.767L65.532,53.661z"></path></g><g id="SvgjsG2494" featureKey="nameRightFeature-0" transform="matrix(1.262272238336749,0,0,1.262272238336749,19.96072847618342,-15.147271675227445)" fill="#111111"><path d="M14.34 19.96 c4.4 0 7.54 2.46 7.54 7.36 c0 0.42 -0.22 0.6 -0.6 0.64 l-2.4 0.32 c-0.38 0.04 -0.58 -0.16 -0.62 -0.54 c-0.12 -3.06 -1.98 -4.44 -4.84 -4.44 c-4.46 0 -6.62 3.74 -6.62 5.08 l0 11.02 c0 0.36 -0.24 0.6 -0.6 0.6 l-2.4 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -18.4 c0 -0.36 0.24 -0.6 0.6 -0.6 l2.24 0 c0.36 0 0.56 0.24 0.6 0.6 l0.16 2.7 l0.46 0 c1.28 -1.9 3.78 -3.74 7.08 -3.74 z M44.617999999999995 36.84 c0.22 0.26 0.24 0.56 0.02 0.8 c-0.9 1.02 -3.08 2.68 -6.52 2.68 c-3.98 0 -7.74 -1.62 -7.74 -7.92 l0 -8.9 l-5.12 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -1.9 c0 -0.36 0.24 -0.6 0.6 -0.6 l5.12 0 l0 -5.2 c0 -0.36 0.24 -0.6 0.6 -0.6 l2.4 0 c0.36 0 0.6 0.24 0.6 0.6 l0 5.2 l8.32 0 c0.36 0 0.6 0.24 0.6 0.6 l0 1.9 c0 0.36 -0.24 0.6 -0.6 0.6 l-8.32 0 l0 8.64 c0 3.96 2.26 4.9 4.68 4.9 c1.94 0 3.24 -0.84 4.02 -1.5 c0.28 -0.26 0.6 -0.24 0.84 0.04 z M58.176 37.16 c2.36 0 4.24 -0.98 5.52 -2.66 c0.24 -0.32 0.48 -0.34 0.8 -0.14 l1.78 1.04 c0.32 0.2 0.4 0.48 0.18 0.8 c-1.76 2.64 -4.76 4.32 -8.34 4.32 c-5.92 0 -10.24 -4.46 -10.24 -10.28 c0 -5.84 4.32 -10.28 10.24 -10.28 c3.58 0 6.58 1.68 8.34 4.3 c0.22 0.32 0.14 0.62 -0.18 0.82 l-1.78 1.04 c-0.32 0.2 -0.56 0.16 -0.8 -0.14 c-1.28 -1.68 -3.16 -2.68 -5.52 -2.68 c-3.92 0 -6.78 2.82 -6.78 6.94 c0 4.1 2.86 6.92 6.78 6.92 z M87.874 36.88 c0.36 0 0.6 0.24 0.6 0.6 l0 1.92 c0 0.36 -0.24 0.6 -0.6 0.6 l-17.3 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -1.92 c0 -0.36 0.24 -0.6 0.6 -0.6 l7.28 0 l0 -21.78 l-6.84 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -1.9 c0 -0.36 0.24 -0.6 0.6 -0.6 l9.84 0 c0.36 0 0.6 0.24 0.6 0.6 l0 24.28 l6.42 0 z M100.51199999999999 28.82 c4.48 0.58 9.02 1.14 9.02 5.78 c0 3.48 -2.82 5.92 -8.98 5.92 c-5.06 0 -8.62 -1.52 -9.08 -5.98 c-0.04 -0.4 0.22 -0.6 0.58 -0.6 l2.32 0 c0.36 0 0.54 0.16 0.58 0.46 c0.32 2.26 2.52 3.06 5.58 3.06 c3.46 0 5.46 -0.94 5.46 -2.86 c0 -2.12 -2.3 -2.6 -5.48 -3 c-4.4 -0.56 -8.64 -1.24 -8.64 -5.8 c0 -3.4 2.58 -5.84 8.34 -5.84 c4.84 0 8.44 1.5 8.88 5.96 c0.04 0.4 -0.2 0.6 -0.56 0.6 l-2.32 0 c-0.36 0 -0.54 -0.16 -0.58 -0.46 c-0.32 -2.26 -2.54 -3.06 -5.4 -3.06 c-3.04 0 -4.86 0.9 -4.86 2.86 c0 2.06 2 2.54 5.14 2.96 z"></path></g>
                  </g>
              </svg>
            </Link>
            </div>
          

          <div className='search_category w45p d-flex flex-column'>
            <div className={style.search}>
              <input type="text" placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className='category'>
              <ul className='d-flex clear justify-between flex-wrap'>
                <li>#Category 1</li>
                <li>#Category 2</li>
                <li>#Category 3</li>
                <li>#Category 4</li>
                <li>#Category 5</li>
                <li>#Category 6</li>
              </ul>
            </div>
          </div>

          <div className='write_user w27p text-center'>


 
          <button className={style.btnWrite}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" fill="white"/></svg>
                        Write
            </button>

          <Link to="/profile">
          <button className={style.profile}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="#717171"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                  </button>
          </Link>

          <Outlet />
            
      
          </div>
        </div>
    </div>
  )
}

export default Header