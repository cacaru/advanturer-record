import { useNavigate } from "react-router-dom";
import { DetailIcon } from "../../component/loader/IconReader";
import styles from "./characterDetail.module.css"
import CharacterEquip from "./characterEquip";
import CharacterInfo from "./characterInfo";
import { useState } from "react";
import CharacterComb from "./characterComb";

export default function CharacterDetail(){

    const leftMenu = [
        {
            id: "info",
            name: "정보",
        },
        {
            id: "equip",
            name: "장비"
        },
        {
            id: "comb",
            name: "조합",
        },
        {
            id: "enforce",
            name: "강화"
        }
    ];
    const navigator = useNavigate();
    const [showId, setShowId] = useState<string>("info");
    const changeShow = (id: string) => {
        if(id === "enforce"){
            // 추후 캐릭터 강화창으로 이동해줄 예정
            navigator("/upgrade");
        }
        setShowId(id);
    }

    return(
        <div>
            {/* 배경화면 */}
            <div className={styles.pageBg} />
            
            {/* 좌측 메뉴 바 메뉴*/}
            <div className={styles.leftListContainer}>
                {
                    leftMenu.map((s) => (
                        <div key={s.id} 
                            className={`${styles.leftList} ${showId === s.id && styles.listIconSelected}`} 
                            onClick={()=>changeShow(s.id)}>
                            <img className={styles.listIcon} src={DetailIcon[0].image}/>
                            <span className={styles.listTitle}>{s.name}</span>
                        </div>
                    ))
                }

            </div>

            {/* 중앙 - 정보*/}
            <div className={styles.mainContainer} >
                {
                    showId === "info" && <CharacterInfo />
                }
                {
                    showId === "equip" && <CharacterEquip />
                }
                {
                    showId === "comb" &&  <CharacterComb />
                }
            </div>
            
            {/** 중앙 - 강화
             * -> 강화하기로 이동**/}

        </div>
    );
}