import libertad from '../../public/src/assets/img/libertad.png'
import anonima from '../../public/src/assets/img/anonima.png'
import dlr from '../../public/src/assets/img/dlr.png'
import abordo from '../../public/src/assets/img/abordo.png'
import gudfud from '../../public/src/assets/img/gudfud.png'
import reinaalba from '../../public/src/assets/img/reinalba.png'
import fluck from '../../public/src/assets/img/fluck.png'

export const LocationsPoint = () => {
  return (
    <div className="cont_gral_loc_points">
            <h1>Encuentra tu Froodie favorito en los distribuidores</h1>
            <div className='buttons_points'>
                <a href="https://www.instagram.com/fluckdistribuciones/?hl=es"><img src={fluck} alt='Hiper Libertad'/></a>
                <a href="https://www.abordoalimentos.com/producto/platos-listos-froodie-caja-mixta-x-6-uni/"><img src={abordo} alt='Hiper Libertad'/></a>
                <a href="https://supermercado.laanonimaonline.com/congelados/wrap-de-jamon-y-queso-froodie-x-210-g/art_26690/"><img src={anonima} alt='Hiper Libertad'/></a>
                <a href="https://www.hiperlibertad.com.ar/"><img src={libertad} alt='Hiper Libertad'/></a>
                <a href="https://pedix.app/dlr-alimentos-congelados-rh/categoria/DzdqfON4EyY1ibLWv99b/producto/V1KMbHHuFUPo1hQaHGMo"><img src={dlr} alt='Hiper Libertad'/></a>
                <a href="https://reinaalba.mitiendanube.com/productos/combo-froodie-x-4/"><img src={reinaalba} alt='Hiper Libertad'/></a>
                <a href="https://www.gudfud.com.ar/froodie/"><img src={gudfud} alt='Hiper Libertad'/></a>
            </div>
    </div>
  )
}
