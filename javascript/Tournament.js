//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (results) => {
    const table = ['Team                           | MP |  W |  D |  L |  P']
    if (!results) {
        return table.join('\n')
    }

    const teams = new Map()
    for (const result of results.split('\n')) {
        const [teamA, teamB, outcome] = result.split(';')
        if (!teams.get(teamA)) {
            teams.set(teamA, { win: 0, draw: 0, loss: 0 })
        }
        if (!teams.get(teamB)) {
            teams.set(teamB, { win: 0, draw: 0, loss: 0 })
        }

        switch (outcome) {
            case 'win':
                teams.get(teamA).win++;
                teams.get(teamB).loss++;
                break
            case 'draw':
                teams.get(teamA).draw++;
                teams.get(teamB).draw++;
                break
            case 'loss':
                teams.get(teamA).loss++;
                teams.get(teamB).win++
        }
    }

    for (const [team, { win, draw, loss }] of sort(teams.entries())) {
        table.push(
            `${team.padEnd(30)} | ${String(win + draw + loss).padStart(2)} | ${String(win).padStart(2)} | ${String(draw).padStart(2)} |` +
            ` ${String(loss).padStart(2)} | ${String(3 * win + draw).padStart(2)}`
        )
    }

    return table.join('\n')
}

function sort(entries) {
    return [...entries].sort(([aName, a], [bName, b]) => {
        const aPoints = 3 * a.win + a.draw,
            bPoints = 3 * b.win + b.draw
        if (aPoints === bPoints) {
            return aName.localeCompare(bName)
        }

        return bPoints - aPoints
    })
}