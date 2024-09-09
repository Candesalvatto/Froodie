// import Baner from '../../public/src/assets/img/meal-plan-with-copy-space-lots-vegetables-pasta.jpg'
//  import Slinte from '../../public/src/assets/img/slinte-yellow.png'
import { XyzTransitionGroup } from '@animxyz/react'



export const Banner = () => {



  const letters = ['f', 'r', 'o', 'o', 'd', 'i', 'e'];
  const numElements = 10

  
  return (
    <div className='banner-primary'>
        <div className='banner-secundary'>
            {/* <div className='banner-slinte'>
                <img src={Slinte} alt='slinte'/>
                    <div className='banner-text'>
                    <h1>EN TU MESA Y EN TU CASA</h1>
                    <h2>O EN CUALQUIERA LADO</h2>
                    <h3>Traemos comidas y sabores apetecibles y caseros, listos para cualquier hora y en cualquier lugar</h3>
                    </div>
            </div>
            <div className='banner-img'>
                <img src={Baner} alt='image-banner'/>
            </div> */}

            <div className="overlay">
              {/* <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div> */}
              <XyzTransitionGroup
  appear
  className="overlay-cont"
  xyz="fade down-100% back-5 duration-3 ease-ease stagger-2.5 iterate-1 origin-bottom perspective"
>
  {[...Array(numElements)].map((_, index) => (
    <div className="bar" key={index} />
  ))}
</XyzTransitionGroup>
            </div>

            <div className="header">
            <XyzTransitionGroup
      appear

      className="item-group"
      xyz="fade down-100% back-5 duration-5 ease-ease stagger-2.5 iterate-1 origin-bottom perspective delay-8"
    >
      {letters.map((letter, index) => (
        <h1 className="headerH1" key={index}>
          {letter}
        </h1>
      ))}
    </XyzTransitionGroup>
            </div>

        </div>
    </div>
  )
}
