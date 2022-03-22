/**
 * @jest-environment jsdom
 */
import {fetchNewsData} from './fetchApi.js'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
        {0: {title: 'Pocetak:Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija'},
        1: {title: 'Drugi:Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija'},
        2: {title: 'Treci:Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija'},
        3: {title: 'Danas vise od 60 umrlih od korone', category: 'Kategorija'},
        4: {title: 'Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija'},
        5: {title: 'Krivokapic napustio skupstinun, ne prisustvuje raspravi o vladi', category: 'Kategorija'},
        6: {title: 'Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija'},
        7: {title: 'Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija'},
        8: {title: 'Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija'},
        9: {title: 'Deseti:Danas vise od 60 umrlih od korone ', category: 'Kategorija'},
        10: {title: 'Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija'}}),
  })
);

beforeEach(() => {
    fetch.mockClear();
  });

  it('should fucking work tape 100', async () => {
    const aa = await fetchNewsData();

    console.log(aa);
  })