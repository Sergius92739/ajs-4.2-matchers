import sortPlayerList from '../js/playerList';

test('Проверяем корректность сортировки', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortPlayerList(data)).toEqual(sortPlayerList(expected));
});
