function createPerson (name, type) {
  if ( name.length > 2 && name.length < 10 && giveTypePerson(type) != undefined) {
    const person = {
      name,
      type,
    };

    return person;

  } else {
    throw new Error('Wait, my boy, you are crazy?')
  }
  
}

function giveTypePerson (type) {
  const typePerson = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  for (let value of typePerson) {
    if (value == type) {
      return type;
    }
  }
}

function unitDamageDefence (type) {
  const obj = [
    {type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25},
    {type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10},
    {type: 'Magician', health: 100, level: 1, attack: 10, defence: 40},
    {type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25},
    {type: 'Undead', health: 100, level: 1, attack: 40, defence: 10},
    {type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40},
  ];

  
}

const ourHero = createPerson('MIsha', 'Daemon')

console.log(ourHero);
