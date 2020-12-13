export type Action = {
    uuid: string;
    label: string;
    callback: Function;
}

type MessageClasses = 'message--initial' | 'message--grouped' | 'component';
export type Message = {
    uuid?: string;
    messageClass: MessageClasses;
    sender: 'bot' | 'user';
    text: string;
    delay: number;
    showLoader: boolean;
    dispatchOnSend?: { type: string, payload: any };
    Component?: any
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
};

export type Context = {
    appState: AppState;
    dispatch: Function;
};

export enum Events {
    REGISTRATION_SUBMITTED = 'REGISTRATION_SUBMITTED',
    LOGIN_SUBMITTED = 'LOGIN_SUBMITTED',
    MESSAGE_REMOVED = 'MESSAGE_REMOVED'
}