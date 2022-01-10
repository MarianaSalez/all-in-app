import React from 'react'
import  {useState,useEffect}  from 'react';
//barra de carga

 function Load(){
    const step = 1
    const interval = 10
    const maxProgress = 100
  
    const [progressPercentage, setProgressPercentage] = useState(100);
  
    useEffect(() => {
      const updateProgress = () => setProgressPercentage(progressPercentage + step)
      if (progressPercentage < maxProgress) {
        setTimeout(updateProgress, interval)
      }
    }, [progressPercentage])
  
    return (
      <div className="button-container" onClick={() => setProgressPercentage(0)}>
        <div
          style={{ width: progressPercentage + "%" }}
          className="button-progress"
        />
        
      </div>
    );
 }
 export default Load