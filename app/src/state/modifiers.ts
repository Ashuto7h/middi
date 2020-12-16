import { CompletedTask, AppState, Habit } from "../types";

export const addCompletedTask = (state: AppState, task: CompletedTask) => {
    const newState = { ...state };
    const habitIndex: number = newState.habits.findIndex((habit: Habit) => habit.id === task.HabitId);
    const habit: Habit = {
        ...state.habits[habitIndex],
        CompletedTasks: [ ...state.habits[habitIndex].CompletedTasks as [], task ]
    };
    newState.habits[habitIndex] = habit;
    return newState;
};

export const removeCompletedTask = (state: AppState, task: CompletedTask) => {
    const newState = { ...state };
    const habitIndex: number = newState.habits.findIndex((habit: Habit) => habit.id === task.HabitId);
    const tasks = newState.habits[habitIndex].CompletedTasks;
    const taskIndex = tasks.findIndex(cTask => cTask.id === task.id)
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }
    const habit: Habit = {
        ...state.habits[habitIndex],
        CompletedTasks: tasks
    };
    newState.habits[habitIndex] = habit;
    return newState;
};