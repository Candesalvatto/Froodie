import { XyzTransitionGroup } from '@animxyz/react'



export const Banner = () => {

  const letters = ['f', 'r', 'o', 'o', 'd', 'i', 'e'];
  const numElements = 10

  
  return (
    <div className='banner-primary'>
        <div className='banner-secundary'>

                                  <div className="overlay">
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
        <div className='banner-terciary'>
        <XyzTransitionGroup
                            appear
                       xyz="fade-100%  down-1 origin-bottom ease-out-back duration-10  iterate-1  delay-30">
              <h2>FROZZEN IDEAS READY TO EAT</h2>
              </XyzTransitionGroup>
        </div>
    </div>
  )
}
