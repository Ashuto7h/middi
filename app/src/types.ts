export type Action = {
    uuid: string;
    label: string;
    callback: Function;
}

type MessageClasses = 'message--initial' | 'message--grouped' | 'message--component';
export type Message = {
    uuid?: string;
    messageClass: MessageClasses;
    sender: 'bot' | 'user';
    text: string;
    delay: number;
    showLoader: boolean;
    dispatchOnSend?: { type: string, payload: any };
    Component?: any
    componentProps?: any
}

type AuthState = {
    loggedIn: boolean;
    name: string;
}

export type AppState = {
    auth: AuthState;
    messages: Message[];
    actions: Action[];
    eventEmitted: any;
    habits: Habit[]
};

export type Context = {
    appState: AppState;
    dispatch: Function;
};

export enum Events {
    REGISTRATION_SUBMITTED = 'REGISTRATION_SUBMITTED',
    LOGIN_SUBMITTED = 'LOGIN_SUBMITTED',
    MESSAGE_REMOVED = 'MESSAGE_REMOVED',
    HABIT_FORM_SUBMITTED = 'HABIT_FORM_SUBMITTED',
    GOAL_COMPLETED = 'GOAL_COMPLETED'
}

export type Habit = {
    id: number;
    userId: number;
    name: string;
    description: string;
    color: string;
    weeklyGoal: number;
    createdAt?: string;
    updatedAt?: string;
    CompletedTasks: CompletedTask[]
    CompletedGoals: CompletedGoal[]
}

export type CompletedTask = {
    id?: number;
    HabitId: number;
    dateCompleted: string;
    createdAt?: string;
    updatedAt?: string;
}

export type CompletedGoal = {
    id: number;
    HabitId: number;
    weekStartDate: string;
    createdAt: string;
    updatedAt: string;
}