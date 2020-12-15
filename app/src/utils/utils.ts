import { Habit } from "../types";
import env from '../env';

export const getHabitColorKey = (habit: Habit): string => {
    const values = Object.values(env.habitColors);
    const keys = Object.keys(env.habitColors);
    const index = values.indexOf(habit.color);
    return keys[index];
};