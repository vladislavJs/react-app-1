import {useEffect, useState} from "react";

export const useHover = ref => {
    const [isHover, setIsHover] = useState(false)

    const onn = () => setIsHover(true)
    const off = () => setIsHover(false)

    useEffect(() => {
        if(!ref.current) return

        const node = ref.current
        node.addEventListener('mouseenter', onn)
        node.addEventListener('mousemove', onn)
        node.addEventListener('mouseleave', off)

        return () => {
            node.removeEventListener('mouseenter', onn)
            node.removeEventListener('mousemove', onn)
            node.removeEventListener('mouseleave', off)
        }

    }, [])

    return isHover

}