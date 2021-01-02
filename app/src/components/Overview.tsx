import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { CompletedGoal, Habit } from '../types';
import isSameWeek from 'date-fns/isSameWeek';
import { ReactComponent as Rocket } from './icons/rocket.svg';
import { ReactComponent as Trophy } from './icons/trophy.svg';
import OverviewChart from './OverviewChart';

const Overview = () => {
    const { appState } = useContext(AppContext);
    const [quote, setQuote] = useState({ text: '', author: '' })

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        // Get a random inspirational quote
        fetch("https://type.fit/api/quotes") // API for inspirational quotes
        .then((res: any) => res.json())
        .then((data: any) => {
            setQuote(data[Math.round(Math.random()*data.length)]);
        });
    }
    
    const getThisWeeksGoals = (): number => {
        const completedGoals: boolean[] = appState.habits.map((habit: Habit) => {
            return habit.CompletedGoals.some((goal: CompletedGoal) => isSameWeek(new Date(goal.weekStartDate), new Date()))
        });
        return completedGoals.filter((g: boolean) => g).length;
    }

    const getProgressBarWidth = (): string => {
        let progress = getThisWeeksGoals();
        if (progress > appState.habits.length) {
            progress = appState.habits.length;
        };
        return `${(progress/appState.habits.length)*100}%`
    }

    const getTotalGoalsCompleted = (): number => {
        return appState.habits.reduce((sum: number, habit: Habit) => {
            return sum + habit.CompletedGoals.length;
        }, 0)
    }

    return (
        <div className="overview">
            <div className="overview__header">
                <blockquote>
                    {quote.text}
                </blockquote>
                <cite>- {quote.author}</cite>
            </div>
            <div className="overview__stats">
                <div className="overview__stat">
                    <div>
                        <p>{appState.habits.length}</p>
                    </div>
                    <span>Habits being tracked</span>
                </div>
                <div className="overview__stat">
                    <div>
                        <Rocket />
                        <p>{getThisWeeksGoals()}/{appState.habits.length}</p>
                    </div>
                    <span>Goals achieved this week</span>
                    <div className="progress-bar">
                        <div className="progress-bar--filler" style={{ width: getProgressBarWidth() }}></div>
                    </div>
                </div>
                <div className="overview__stat">
                    <div>
                        <Trophy />
                        <p>{getTotalGoalsCompleted()}</p>
                    </div>
                    <span>Total goals completed</span>
                </div>
            </div>
            <div className="overview__chart">
                <OverviewChart />
            </div>
        </div>
    )
}

export default Overview;