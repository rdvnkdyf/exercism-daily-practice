export const saddlePoints = matrix => 
	matrix.flatMap((row, y) => 
		row.flatMap((val, x) => 
			row.every(v => val >= v) && 
			matrix.every(r => val <= r[x]) ?
			{row: y + 1, column: x + 1} : []
		)
	);