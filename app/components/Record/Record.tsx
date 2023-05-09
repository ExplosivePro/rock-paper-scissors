import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Choice } from '@/app/types';

interface RecordProps extends React.ComponentProps<"div"> {
    records: Choice[],
    score: number
}

const Record: React.FC<RecordProps> = ({records, score}) => {
    return (
        <div className={styles['record-wrapper']}>
            <div>
                {records.map((item, ndx) => (
                    <div key={ndx} className={styles['record-item']}>{item}</div>
                ))}
            </div>
            <div className={styles['record-score']}>
                <div className={styles['record-score-label']}>score</div>
                <div className={styles['record-score-value']}>{score}</div>
            </div>
        </div>
    )
};

export default Record;
export type { RecordProps };