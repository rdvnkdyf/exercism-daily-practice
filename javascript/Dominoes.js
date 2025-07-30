export const chain = (dominoes = null) => {
	if(dominoes.length > 0){
		if(dominoes.length === 1 && dominoes[0][0] === dominoes[0][1]) return dominoes;
		return createDomino(dominoes);
	}else{
		return dominoes;
	}
};

function createDomino(dominoes){
	let dominoLength = dominoes.length;
	let isDomino = [];
	dominoes = dominoes.map(x => x.sort()).sort();
	dominoes = dominoes.filter((x,index) => {
		if(index % 2 === 0) return x.reverse();
		return x;
	}).sort();
	let temp = dominoes;
	let visited = [];
	let count = 0;
	for(let i = 0; i < temp.length; i++){
		if(isDomino.length === 0 || isDomino[isDomino.length - 1][1] === temp[i][0]){
			isDomino.push(temp[i])
		}else if(isDomino[isDomino.length - 1][1] === temp[i][1]){
			isDomino.push(temp[i].reverse());
		}else if(visited.indexOf(temp[i].join('')) === -1){
			visited.push(temp[i].join(''));
			let item = temp.splice(i,1);
			temp.push(item[0]);
			i--;
		}
		if(i === temp.length - 1 && isDomino.length !== dominoLength){
			if(count === dominoLength) break;
			let item = dominoes.splice(0,1);
			dominoes.push(item[0]);
			temp = dominoes;
			visited = [];
			isDomino = [];
			count++;
			i = -1;
		}
	};
	if(isDomino[0][0] !== isDomino[isDomino.length - 1][1] || isDomino.length === 2 || isDomino.length !== dominoLength) return null;
	return isDomino;
}