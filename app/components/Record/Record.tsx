import styles from './style.module.css';
import { useRecordContext } from '@/app/contexts/RecordContext';

const Record: React.FC = () => {
    const { records, score } = useRecordContext();
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