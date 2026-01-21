import { ClassIcon } from '../../component/loader/IconReader';
import { useState , useRef} from 'react';
import styles from './characterList.module.css';
import { useNavigate } from 'react-router-dom';
import { useUnitDataStore } from '../../store/unitData.store';
import { selectUnit } from '../../component/loader/selectUnit';
import { IUnitData } from '../../types/unitInfo';
import { ClassTypeLabel } from '../../domain/class.mapper';


export default function CharacterList(){

    // 캐릭터 목록 확인하기
    const allUnit = useUnitDataStore((s) => s.data);
    const [showUnit, setShowUnit] = useState<Array<IUnitData>>(Object.values(allUnit));

    // 목록 정렬 기준
    const [isAsc, setIsAsc] = useState<boolean>(true);

    // 현재 선택된 클래스
    const [nowClass, setClass] = useState<number>(0);
    const [nowClassId, setClassId] = useState<string>("All");
    // 테마 선택으로 스크롤 초기화
    const cardView = useRef<HTMLDivElement | null>(null);
    const onClickClass = (id: number, type: string) => {
        if(!cardView.current) return;
        // 스크롤 초기화
        cardView.current.scrollTop = 0;
        // 보여주는 항목의 데이터를 변경해줘야함
        setClass(id);
        setClassId(type);

        setShowUnit(setUnitList(type, isAsc));
    };

    const onSelectAsc = () => {
        const asc = !isAsc;
        setIsAsc(asc);
        // 값 재정렬
        setShowUnit(setUnitList(nowClassId, asc));
    }

    const setUnitList = (type:string, asc: boolean) => {
        // type :: 직업분류
        // asc ::  정렬 방향
        // stand :: 정렬 기준
        var result: Array<IUnitData>;
        
        // 데이터 분류
        if(type === "All") result = Object.values(allUnit);
        else result = Object.values(allUnit).filter( (unit) => unit.class === ClassTypeLabel[type]);

        // 정렬
        if(asc) {
            result.sort((a,b) => a.rarity - b.rarity);
        }
        else {
            result.sort((a,b) => b.rarity - a.rarity);
        }   
        return result;
    };

    // 캐릭터 상세로 넘어가기
    const navigater = useNavigate();
    const MoveDetail = (id: number, type: string) => {
        // id에 해당하는 allUnit에서의 순서를 알아야함
        // ex -> id : 11 : allUnit[6] 임 -> 순회하면서 내 id를 찾기에는 늦지 않을까 싶다.
        // unit data에 unit의 id로 접근할 수 있도록 저장 자체를 바꿔보자
        selectUnit(id, type);
        navigater("/character/detail");
    };

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
            {/* 좌측 목록 상단에 정렬 기준 list만들기 */}
            <div className={styles.leftListContainer}>
                <div onClick={onSelectAsc} className={styles.sortItem}>
                    <div>정렬</div>
                    <img alt="Icon" className={`${styles.sortImg} ${isAsc ? styles.rotateUp : styles.rotateDown}`} src="/Icon/ui_arrow.png"/>
                </div>
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
                    Object.values(showUnit).map((u, i) => (
                        <div key={u.id} onClick={() => MoveDetail(u.id, nowClassId)} className={styles.characterCard}>
                            <div>
                                { u.id }
                            </div>
                            <div>
                                { u.name } 
                            </div>
                        </div>
                    ))
                }

            </div>
            
        </div>
        
);
}