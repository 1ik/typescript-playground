interface Game {
	play(): void;
}


class BattleField implements Game {
	play() {
		console.log("I am playing BF4");
	}
}

class GameManager <T extends Game> {
	manage(arg: T) {
		arg.play();
	}
}

let gm = new GameManager<BattleField>();
gm.manage(new BattleField()); // so this will print "I am playing BF4"



//creating a new object withing generic.

class FirstClass {
	id: number;
}

class SecondClass {
	name: string;
}

class GenericCreator<T> {
	create(arg : { new() : T}) : T {
		return new arg();
	}
}

let creator1 = new GenericCreator<FirstClass>();
creator1.create(FirstClass);




