import Baner from '../../public/src/assets/img/example-banner.jpg'
 import Slinte from '../../public/src/assets/img/slinte-yellow.png'

export const Banner = () => {
  return (
    <div className='banner-primary'>
        <div className='banner-secundary'>
            <div className='banner-slinte'>
                <img src={Slinte} alt='slinte'/>
                    <div className='banner-text'>
                    <h1>THE VIBRANT FLAVORS OF</h1>
                    <h2>WEST AFRICA</h2>
                    <h3>Llevamos a tu mesa comidas y sabores apetecibles y llenos de sabor, que te harán pensar ¿dónde ha estado esto toda mi vida?</h3>
                    </div>
            </div>
            <div className='banner-img'>
                <img src={Baner} alt='image-banner'/>
            </div>
        </div>
    </div>
  )
}
