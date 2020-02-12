import { ourHero, createPerson } from '../constructor';

const {name, type, health, level, attack , defence} = ourHero;

const finnalArr = {name2: 'Masha', type2: 'Undead', health2: 100, level2: 1, attack2: 40, defence2: 10};
const {name2, type2, health2, level2, attack2 , defence2} = finnalArr;

function checkArr () {
  if (name == name2, type == type2, health == health2, level == level2, attack == attack2, defence == defence2) {
    return true
  } else {
    return false
  }
}

let received = 0;
let expected = 0;

test('should introduce correct healthpoint', () => {
  received = checkArr();
  expected = true;
  expect(received).toBe(expected);
});

test('should throw Error Неверный формат ввода', () => {
  expect(createPerson('Mashaffffffff', 'Undead')).toThrow(new Error('Неверный формат ввода!'));
});
