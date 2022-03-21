/**
 * @jest-environment jsdom
 */
// This is the function we'll be testing
import {displayNews} from './main.js'

async function fetchNewsData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
  
    return json
  }
  
  // This is the section where we mock `fetch`
  const unmockedFetch = global.fetch
  
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([{title: 'Nova usluga eUprave - elektronski potspis na daljinu', category: 'Kategorija', time: '2', prefix: 'min'}]),
      })

      document.body.innerHTML = `<div class="news" data-news>
      <h1 class="main-title">Najnovije vesti</h1>
  </div>`;
  })
  
  afterAll(() => {
    global.fetch = unmockedFetch
  })
  
  // This is actual testing suite
  describe('withFetch', () => {
    test('works', async () => {
      const json = await fetchNewsData()
      displayNews();
      console.log(json[0].title);
      expect(Array.isArray(json)).toEqual(true)
      expect(json.length).toEqual(1)
    })
  })