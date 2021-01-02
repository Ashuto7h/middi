import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { CompletedGoal, Habit } from '../types';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import add from 'date-fns/add';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import format from 'date-fns/format';
import { ReactComponent as Done } from './icons/done.svg';

type ProgressTable = {
    weeks: Date[];
    habits: {
        name: string;
        color: string;
        data: number[];
    }[]
}

const OverviewChart = () => {
    const { appState } = useContext(AppContext);
    const [data, setData] = useState<ProgressTable>({
        weeks: [],
        habits: []
    });

    useEffect(() => {
        const startPeriod = endOfWeek(add(new Date(), { weeks: -5 }));
        const endPeriod = endOfWeek(new Date());
        const periodLength = differenceInWeeks(endPeriod, startPeriod) + 1;
        const weeks: Date[] = [];
        for (let i=0; i<periodLength; i++) {
            weeks.push(add(startPeriod, { weeks: i }));
        }

        const tableData: ProgressTable = {
            weeks,
            habits: []
        };
        appState.habits.forEach((habit: Habit) => {
            const points = weeks.map((d: Date) => {
                const startWeek = startOfWeek(d);
                return habit.CompletedGoals.map((goal: CompletedGoal) => {
                    const goalTime: number = new Date(goal.weekStartDate).getTime();
                    const isWithin: boolean = d.getTime() > goalTime && goalTime >= startWeek.getTime();
                    return isWithin ? 1 : 0;
                });
            });
            const habitPoints = points.map((pointArray: number[]) => {
                return pointArray.reduce((sum: number, point: number) => sum + point, 0);
            });
            tableData.habits.push({
                name: habit.name,
                color: habit.color,
                data: habitPoints
            })
        });
        setData(tableData)
    }, [])

    return (
        <>
            <p className="table-title">Last 6 weeks</p>
            <table className="overview-table">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={6}>Week starting</th>
                    </tr>
                    <tr>
                        <th></th>        
                        {data.weeks.map((week: Date, index: number) => (
                            <th key={index}>{format(week, 'MMM do')}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.habits.map((habit: any) => (
                        <tr key={habit.name} style={{ backgroundColor: habit.color }}>
                            <td>{habit.name}</td>
                            {habit.data.map((point: number) => (
                                <td>{point ? <Done /> : '-'}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )
};

export default OverviewChart;
