interface IMessage {
	body: string;
	id: number;
}

declare module ErrorHandlers {
	function containsError(message: IMessage): void;
	function printError(message: IMessage): void;
}



