import characters_json from '../data/characters.json';

export default function createCharacter(id) {
    let character = characters_json.find(c => c.id === id);
    return character;
};
