export type Action = {
    label: string;
    callback: Function;
}

type MessageTypes = 'message--initial' | 'message--grouped' | 'component';
export type Message = {
    type: MessageTypes;
    sender: 'bot' | 'user';
    text: string;
    delay: number;
    showLoader: boolean;
    dispatchOnSend?: { type: string, payload: any };
}

export type AppState = {
    auth: {
        loggedIn: boolean;
        username: string;
    };
    messages: Message[];
    actions: Action[];
};

export type Context = {
    appState: AppState;
    dispatch: Function;
};