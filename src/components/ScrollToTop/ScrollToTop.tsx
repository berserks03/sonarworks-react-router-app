import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss'

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'block' : 'none'}}>Top</button>
    )
};

export default ScrollToTop;
