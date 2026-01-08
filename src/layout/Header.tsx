import { useEffect, useState } from 'react';
import { useResourceStore } from '../store/resource.store';
import { ResourceIcon } from '../component/IconReader';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResourceValue } from '../types/resource';

export default function Header() {

    const [resource_value, setResource] = useState<ResourceValue[]>([]);
    const resourcesLoaded = useResourceStore((state) => state.isLoaded);
    const resources = useResourceStore((state) => state.resources);

    // icon에 따라 재화값 매핑
    const updateResourceValue = () => {        
        const totalValue = ResourceIcon.map( (icon) => {
        const found = resources.find( r => r.id === icon.id );
            return { ...icon, value : found?.value ?? 0, };
        });
        setResource(totalValue);
    };
    // 로드되면 값 가공
    useEffect( () => {
        updateResourceValue();
    }, [resourcesLoaded, resources]);

    // 현재 화면 받기
    const location = useLocation();
    const cpath = location.pathname;

    // 화면 이동기
    const navigater = useNavigate();
    const MoveBack = () =>{
        var path = "";
        switch(cpath){
            case "/character":
                path = "/";
                break;
            case "/character/detail":
                path = "/character";
        }
        navigater(path);
    }

    return (
        <header className={styles.appHeader}>
            {/* 1. 상단 왼쪽 : 레벨 */}
            {   cpath === "/" && (
                    <div className={`${styles.box} ${styles.topLeft}`}>
                        레벨
                    </div>
                )
            }
            {   cpath === "/character" && (
                <div className={styles.topLeft}>
                    <div className={styles.backBtn} onClick={MoveBack}>
                        뒤로 가기 
                    </div>
                </div>
            )}
            {   cpath === "/character/detail" && (
                <div className={styles.topLeft}>
                    <div className={styles.backBtn} onClick={MoveBack}>
                        돌아 가기
                    </div>
                </div>
            )}
            

            {/* 2. 상단 오른쪽 : 재화 표시 */}
            <div className={`${styles.topRight}`}>
            {
                resource_value.map((item) => (
                <div className={styles.resoruceBox}>
                    <img className={styles.resourceIcon} src={item.image} alt=""/>
                    <span className={styles.resourceTitle}>{item.name}</span>
                    {/* 이곳에 현재 소지중인 재화량을 표시함 */ }
                    <span className={styles.resourceValue} id={"resource_" + item.id}>{item.value}</span>
                </div>
                ))
            }
            </div>
        </header>
    );
}