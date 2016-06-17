export class MudMessageBuilder {
    private messages: MudMessage[];
    constructor(text?: string) {
        this.messages.push(new MudMessage(text));
    }

    public addText(text: string) {
        this.messages.push(new MudMessage(text));
        return this;
    }
    
    public colorText(color: SupportedColors) {
        this.latestMessage().color = color;
        return this;
    }
    
    private latestMessage(): MudMessage {
        return this.messages[this.messages.length-1];
    }
    
}

class MudHTML {
    constructor(public open: string, public close: string) {}
}

class MudMessage {
    constructor (public rawText: string) {}
    public htmlFormat: MudHTML;
    public color: SupportedColors;
}

export enum SupportedColors {
    white,
    black,
    red,
    blue,
    yellow,
    magenta,
    cyan,
    green,
    boldwhite,
    boldblack,
    boldred,
    boldblue,
    boldyellow,
    boldmagenta,
    boldcyan,
    boldgreen
}