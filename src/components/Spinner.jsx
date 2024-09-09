import  { useState, useEffect, useRef } from 'react';

export const Spinner = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const counterRef = useRef(null);
  
    useEffect(() => {
      // Función para iniciar el loader
      const startLoader = () => {
        const updateCounter = () => {
          setCurrentValue(prevValue => {
            if (prevValue >= 100) {
              return 100;
            }
  
            const randomIncrement = Math.floor(Math.random() * 10) + 1;
            let newValue = prevValue + randomIncrement;
  
            if (newValue > 100) {
              newValue = 100;
            }
  
            return newValue;
          });
  
          const delay = Math.floor(Math.random() * 200) + 50;
          setTimeout(updateCounter, delay);
        };
  
        updateCounter();
      };
  
      startLoader();
    }, []); // Solo corre una vez cuando el componente se monta
  
    return (
      <div className="loading-container">
        <h1 className="counter" ref={counterRef}>{currentValue}%</h1>
      </div>
    );
  };
