import { ClassIcon } from '../../component/IconReader';
import { useState , useRef, useEffect} from 'react';
import styles from './characterList.module.css';

export default function CharacterList(){

    const [nowClass, setClass] = useState(0);
    const className = ["전체", "기사", "창술사", "궁사", "마법사", "주술사", "치유사"];
    const cardView = useRef<HTMLDivElement | null>(null);
    const onClickClass = (id: number) => {
        if(!cardView.current) return;
        // 스크롤 초기화
        cardView.current.scrollTop = 0;
        setClass(id);
    }

    // 드래그 스크롤링
    const speed = 1.5;
    const isDragging = useRef<boolean>(false);
    const startY = useRef<number>(0);
    const lastY = useRef<number>(0);
    const velocity = useRef<number>(0);
    const rafId = useRef<number | null>(null);
    
    const MIN_VELOCITY = 0.1;
    const FRICTION = 0.96;
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        isDragging.current = true;
        startY.current = e.clientY;
        lastY.current = e.clientY;
        velocity.current = 0;

        if(rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!isDragging.current) return;

        const dy = e.clientY - lastY.current;
        e.currentTarget.scrollTop -= dy * speed;
        velocity.current = dy;
        lastY.current = e.clientY;
    };
    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!isDragging.current) return;
        isDragging.current = false;

        const target = e.currentTarget;

        const scrolling = () => {
            if(!rafId.current) return;
            if(Math.abs(velocity.current) < MIN_VELOCITY){
                cancelAnimationFrame(rafId.current);
                rafId.current = null;
                return;
            }

            target.scrollTop -= velocity.current;
            velocity.current *= FRICTION;

            rafId.current = requestAnimationFrame(scrolling);
        }

        rafId.current = requestAnimationFrame(scrolling);
    };


    return (
        <div className={styles.characterContainer}>
            {/* 좌측 목록 */}
            <div className={styles.leftListContainer}>
                {
                    ClassIcon.map((c, idx) => (
                        <div onClick={()=>onClickClass(idx)} className={`${styles.leftList} ${nowClass === idx ? styles.classSelected : ""}`}>
                            <img alt="" className={`${styles.listIcon} ${nowClass === idx ? styles.listIconSelected : ""}`} src={c.image} />
                            <span className={styles.listTitle}>{c.name}</span>
                        </div>
                    ))
                }
            </div>


            { /* 중앙 유닛 목록  - 추후 db화 해서 정보 받아올 곳 - 간략하게 하나만 일단 해보자고*/ }
            <div className={styles.characterList} 
                ref={cardView}
                onMouseDown={handleMouseDown} 
                onMouseLeave={handleMouseUp} 
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                >
                {
                    Array.from({length : 50}).map((_, i) => (
                        <div key={i} className={styles.characterItem}>
                            {className[nowClass]} { i + 1 }
                        </div>
                    ))
                }

            </div>
            
        </div>
        
);
}