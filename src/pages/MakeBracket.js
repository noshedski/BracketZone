export default function MakeBracket(){

    const { JsonDatabase } = require('brackets-json-db');
    const { BracketsManager } = require('brackets-manager');

    const storage = new JsonDatabase();
    const manager = new BracketsManager(storage);

    // Create an elimination stage for tournament `3`.
    manager.create.stage({
    tournamentId: 3,
    name: 'Elimination stage',
    type: 'double_elimination',
    seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
    settings: { grandFinal: 'double' },
    });


}