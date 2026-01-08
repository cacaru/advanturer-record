import { ReactNode, useState } from "react";
import styles from "./ToolTip.module.css";

interface ToolTipProps {
    title?: string;
    explain: string;
    onClick? : () => void;
    children: ReactNode;
};

export default function ToolTip({title, explain, onClick, children}: ToolTipProps){

    const [show, setShow] = useState<boolean>(false);

    return(
        <div className={styles.tooltipContainer}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={onClick}
            >
                {children}

                {show && (
                    <div className={styles.tooltip}>
                        {title && (
                            <div className={styles.tooltipTitle}>{title}</div>
                        )}
                        <div className={styles.tooltipExplain}>
                            {explain}
                        </div>
                    </div>
                )}
        </div>
    )
}