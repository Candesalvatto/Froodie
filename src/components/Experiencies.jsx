import Exp from '../../public/src/assets/img/istockphoto-1475879299-2048x2048.jpg'
import Slinte from '../../public/src/assets/img/slinte-green.png'

export const Experiencies = () => {
  return (
    <div className="cont-exp-gral">
        <div className="exp-col">
            <img src={Exp} alt="experiences"className='img-exp'/>
            <div className='slinte-cont-exp'>
            <img src={Slinte} alt="experiences"className='slinte-exp'/>
            <h1>Práctico, nutritivo, delicioso</h1>
            <h2>Hechos a base de productos naturales, sin conservantes que mantienen el sabor casero que los caracteriza, como hecho en casa!</h2>
            <button>MÁS INFORMACIÓN</button>
            </div>
        </div>
    </div>
  )
}
