;(() => {
  let tiles = []

  window.addEventListener('load', () => {
    init()
  })

  function init() {
    const table = document.getElementById('table')
    for (let i = 0; i < 4; ++i) {
      const tr = document.createElement('tr')

      for (let j = 0; j < 4; ++j) {
        const td = document.createElement('td')
        const index = i * 4 + j
        td.className = 'tile'
        td.index = index
        td.value = index
        td.textContent = index == 0 ? '' : index
        td.addEventListener('click', click)
        tr.appendChild(td)
        tiles.push(td)
      }

      table.appendChild(tr)
    }

    for (let i = 0; i < 1000; ++i) {
      click({ srcElement: { index: Math.floor(Math.random() * 16) } })
    }
  }

  function click(e) {
    const i = e.srcElement.index

    if (i - 4 >= 0 && tiles[i - 4].value === 0) {
      swap(i, i - 4)
    } else if (i + 4 < 16 && tiles[i + 4].value === 0) {
      swap(i, i + 4)
    } else if (i % 4 !== 0 && tiles[i - 1].value === 0) {
      swap(i, i - 1)
    } else if (i % 4 !== 3 && tiles[i + 1].value === 0) {
      swap(i, i + 1)
    }
  }

  function swap(i, j) {
    const tmp = tiles[i].value
    tiles[i].textContent = tiles[j].textContent
    tiles[i].value = tiles[j].value
    tiles[j].textContent = tmp
    tiles[j].value = tmp
  }
})()
