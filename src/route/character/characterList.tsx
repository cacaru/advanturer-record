import { ClassIcon } from '../../component/loader/IconReader';
import { useState , useRef, useEffect} from 'react';
import styles from './characterList.module.css';
import { useNavigate } from 'react-router-dom';
import { useCharacterNavStore } from '../../store/characterNav.store';
import { useUnitDataStore } from '../../store/unitData.store';

export default function CharacterList(){

    const [nowClass, setClass] = useState(0);
    const [nowClassId, setClassId] = useState("adventurer00");
    // 테마 선택으로 스크롤 초기화
    const cardView = useRef<HTMLDivElement | null>(null);
    const onClickClass = (id: number, type: string) => {
        if(!cardView.current) return;
        // 스크롤 초기화
        cardView.current.scrollTop = 0;
        setClass(id);
        setClassId(type);
    }

    // 캐릭터 상세로 넘어가기
    const navigater = useNavigate();
    const setCharacterId = useCharacterNavStore((store) => store.setCharacterId);
    const MoveDetail = (id: number, type: string) => {
        // id에 해당하는 allUnit에서의 순서를 알아야함
        // ex -> id : 11 : allUnit[6] 임 -> 순회하면서 내 id를 찾기에는 늦지 않을까 싶다.
        // unit data에 unit의 id로 접근할 수 있도록 저장 자체를 바꿔보자
        setCharacterId(id, type);
        navigater("/character/detail");
    };

    // 캐릭터 목록 확인하기
    const allUnit = useUnitDataStore((s) => s.data);
    console.log(allUnit[0].name);

    // 드래그로 스크롤 하기 
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
            {/* 배경화면 */}
            <div className={styles.pageBg} />
            {/* 좌측 목록 */}
            <div className={styles.leftListContainer}>
                {
                    ClassIcon.map((c, idx) => (
                        <div onClick={()=>onClickClass(idx, c.id)} className={`${styles.leftList} ${nowClass === idx ? styles.classSelected : ""}`}>
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
                        <div key={i} onClick={() => MoveDetail(i, nowClassId)} className={styles.characterCard}>
                            { i + 1 }
                        </div>
                    ))
                }

            </div>
            
        </div>
        
);
}