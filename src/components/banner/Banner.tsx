import styles from "./Banner.module.scss";
import TopTextSvg from "../../assets/Sevimli taomlaringizga buyurtma bering.svg";
import img from "../../assets/2da9eedf73336eb4550bea20e402b6d8.png";
import img3 from "../../assets/Group 404.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Banner =()=>{
   const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
   useEffect(() => {
      
      const deferAnimation = setTimeout(() => {
        setIsTextVisible(true);
      }, 1000); 
  
      return () => {
        clearTimeout(deferAnimation );
      };
    }, []);
    const visibleText = {
        scale: isTextVisible ? [0, 1] : 0,
    };
   return <div className={styles.bannerAnimationContainer}>
      <motion.div 
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }} >

      <motion.img src={TopTextSvg} alt="This is text"
         className={styles.topImage}   
      />

      <motion.button 
      initial={{  scale: 0.8 }}
      animate={{  scale: 1 }} 
      transition={{  duration:1,repeat: Infinity}}>
         Batafsil
      </motion.button>
      
      </motion.div>
    <motion.div className={styles.bgYellow}
    initial={{ opacity: 0, x: 500 }}
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1.5 }}> 
       
       <motion.img src={img} alt="This is img of pilov"  className={styles.bannerAnimationPilovImg}
      animate={{
         rotate: [0,100, 220, 360], 
       }}
       transition={{  duration:5}} />
    </motion.div>
    
    <motion.div className={styles.bannerAnimationDisplayText}
      whileTap={{ scale: 0 }} 
      initial={{rotate:-15, scale:0}}
      animate={ visibleText }
      transition={{ duration: 1 }}>

         <p>Click "Taomlar yetkazish" xizmat</p>

      </motion.div>
      <motion.img src={img3} alt="This is text" className={styles.bannerAnimationBottomText} 
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 2.5 }} />
      
   </div>
}

export default Banner;