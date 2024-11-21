import { motion, MotionConfig } from "framer-motion"
import {useState} from 'react'

function App() {

  return (
    <div className="grid h-screen place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
      <AnimatedHamburguerButton />
    </div>
  )
}

export default App


function AnimatedHamburguerButton() {
  const [active, setActive] = useState(false)
  return(
    /* framer motion context provider, it applies all framer motion configs to the motion items inside of it */
    <MotionConfig transition={{duration: 0.5, ease: 'easeInOut'}}>
      <motion.button className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20" onClick={() => setActive(!active)}
        animate={active ? "open" : "closed"}
        initial={false}
      >
        <motion.span 
          className="absolute h-1 w-10 bg-white"
          style={{top: "35%", left:"50%", x:"-50%", y:"-50%"}}
          variants={{open: {
            rotate: ['0deg', '0deg', '45deg'],
            top: ["35%", "50%", "50%"]
          },
          closed: {
            rotate: ['45deg', '0deg', '0deg'],
            top: ["50%", "50%", "35%"]
          }
        }}
        
        />
        <motion.span 
          className="absolute h-1 w-10 bg-white"
          style={{top: "50%", left:"50%", x:"-50%", y:"-50%"}}
          variants={{open: {
            rotate: ['0deg', '0deg', '-45deg'],
          },
          closed: {
            rotate: ['-45deg', '0deg', '0deg']
          }
        }}
        />
        <motion.span 
          className="absolute h-1 w-5 bg-white"
          style={{bottom: "35%", left:"calc(50% + 10px)", x:"-50%", y:"50%"}}
          variants={{open: {
            rotate: ['0deg', '0deg', '45deg'],
            bottom: ["35%", "50%", "50%"],
            left:"50%"
          },
          closed: {
            rotate: ['45deg', '0deg', '0deg'],
            bottom: ["50%", "50%", "35%"],
            left:"calc(50% + 10px)"
          }
        }}
        />
      </motion.button>
    </MotionConfig>
  )
}