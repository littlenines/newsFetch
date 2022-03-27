import { fetchNewsData } from './fetchApi.js'
import { displayNews } from './main.js'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
      {
        0: { title: 'Pocetak:Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija' },
        1: { title: 'Drugi:Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija' },
        2: { title: 'Treci:Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija' },
        3: { title: 'Danas vise od 60 umrlih od korone', category: 'Kategorija' },
        4: { title: 'Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
        5: { title: 'Krivokapic napustio skupstinun, ne prisustvuje raspravi o vladi', category: 'Kategorija' },
        6: { title: 'Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija' },
        7: { title: 'Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija' },
        8: { title: 'Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija' },
        9: { title: 'Deseti:Danas vise od 60 umrlih od korone ', category: 'Kategorija' },
        10: { title: 'Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
        11: { title: '2Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
        12: { title: '3Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
        13: { title: '4Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' }
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();

  document.body.innerHTML += `
    <div class="news" data-news>
        <h1 class="main-title">Najnovije vesti</h1>
    </div>
    <button data-load-more>Load More</button>`;
});

it('should call fetch, happy path test', async() => {
  await fetchNewsData();
  expect(fetch).toHaveBeenCalledTimes(1);
})

it('should input to HTML', () => {
  const data = [
    { title: 'Pocetak:Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija' },
    { title: 'Drugi:Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija' },
    { title: 'Treci:Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija' },
    { title: 'Danas vise od 60 umrlih od korone', category: 'Kategorija' },
    { title: 'Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
    { title: 'Krivokapic napustio skupstinun, ne prisustvuje raspravi o vladi', category: 'Kategorija' },
    { title: 'Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija' },
    { title: 'Stefan Milenkovic za Nova.rs: Ne mogu da zamislim zivot bez Kolarca', category: 'Kategorija' },
    { title: 'Otkrivamo: SNS urbanisti lobiraju za Novi Sad na vodi', category: 'Kategorija' },
    { title: 'Deseti:Danas vise od 60 umrlih od korone ', category: 'Kategorija' },
    { title: 'Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
    { title: '2Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
    { title: '3Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' },
    { title: '4Jedanaesti:Bela Hadid o nasilnim emotivnim vezama: Maltretiali su me, vracala sam im se', category: 'Kategorija' }];

  displayNews(data);
  
  const dataTime = document.querySelectorAll('[data-time]');
  expect(dataTime[3].innerHTML).toBe('4');
  expect(dataTime[9].innerHTML).toBe('10');
})

