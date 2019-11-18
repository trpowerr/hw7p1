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

const ourHero = createPerson('Misha', 'Daemon')

console.log(ourHero);