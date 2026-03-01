import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Define the props interface
interface HeadingGSAPProps {
  text: string;
  animationType?: 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'rotate' | 'split';
  delay?: number;
  duration?: number;
  className?: string;
}

const HeadingGSAP: React.FC<HeadingGSAPProps> = ({ 
  text, 
  animationType = "fade", 
  delay = 0, 
  duration = 1,
  className = ""
}) => {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = headingRef.current
    if (!element) return

    const context = gsap.context(() => {
      // Different animation types you can choose from
      switch(animationType) {
        case "fade":
          gsap.fromTo(element, 
            { opacity: 0 },
            { opacity: 1, duration, delay, ease: "power2.inOut" }
          )
          break
          
        case "slide-up":
          gsap.fromTo(element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration, delay, ease: "back.out(1.7)" }
          )
          break
          
        case "slide-down":
          gsap.fromTo(element,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration, delay, ease: "back.out(1.7)" }
          )
          break
          
        case "scale":
          gsap.fromTo(element,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration, delay, ease: "elastic.out(1, 0.5)" }
          )
          break
          
        case "rotate":
          gsap.fromTo(element,
            { opacity: 0, rotation: -180 },
            { opacity: 1, rotation: 0, duration, delay, ease: "power2.out" }
          )
          break
          
        case "split":
          // Split text into characters animation
          if (element) {
            const chars = element.textContent?.split('') || []
            element.innerHTML = ''
            chars.forEach((char, index) => {
              const span = document.createElement('span')
              span.textContent = char
              span.style.display = 'inline-block'
              element.appendChild(span)
              gsap.fromTo(span,
                { opacity: 0, y: 20, rotation: 10 },
                { 
                  opacity: 1, 
                  y: 0, 
                  rotation: 0, 
                  duration: duration * 0.8, 
                  delay: delay + (index * 0.05),
                  ease: "power2.out"
                }
              )
            })
          }
          break
          
        default:
          gsap.fromTo(element, 
            { opacity: 0 },
            { opacity: 1, duration, delay }
          )
      }
    }, element)

    return () => context.revert() // Cleanup
  }, [text, animationType, delay, duration])

  return (
    <div ref={headingRef} className={`heading-gsap ${className}`}>
      {text}
    </div>
  )
}

export default HeadingGSAP