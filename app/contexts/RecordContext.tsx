"use client"

import { createContext, useContext, useState } from 'react';
import { Choice, GameOutcome } from '../types';

interface RecordContextType {
    records: Choice[],
    setRecords: (choices: Choice[]) => void;
    addRecord: (outcome: GameOutcome) => void;
    score: number,
    setScore: (score: number) => void
}

const RecordContext = createContext<RecordContextType>({
    records: [],
    setRecords: _ => {},
    addRecord: _ => {},
    score: 0,
    setScore: _ => {}
});

export const useRecordContext = () => useContext(RecordContext);

export function RecordProvider({ children }: {children: React.ReactNode}) {
    const [score, setScore] = useState<number>(0);
    const [records, setRecords] = useState<Choice[]>([]);

    const addRecord = (outcome: GameOutcome) => {
        if (!outcome || !outcome?.result) return;
        let newScore = score
        if (outcome?.result === 'win') {
            newScore ++;
        } else if (outcome?.result === 'lose') {
            newScore --;
        }
        const newRecords = [outcome.playerChoice , ...records]
        if (records.length > 4) {
            newRecords.pop();
        }

        setScore(newScore);
        setRecords(newRecords);
    }
    return (
        <RecordContext.Provider value={{ score, setScore, records, setRecords, addRecord }}>
            {children}
        </RecordContext.Provider>
    );
};