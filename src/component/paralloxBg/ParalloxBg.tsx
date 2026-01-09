import { useEffect, useRef } from "react";
import style from './ParalloxBg.module.css';

export default function ParalloxBg(){

    const bgref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if(!bgref.current) return; 
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 30;
            const y = (e.clientY / innerHeight - 0.5) * 30;
            
            bgref.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className={style.background_root}>
            <div  className={style.move_area}>
                <div ref={bgref} className={style.move_img} />
            </div>
            <div className={style.frame} />
        </div>
    );
}