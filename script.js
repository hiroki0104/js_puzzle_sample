;(() => {
  let tiles = []

  window.addEventListener('load', () => {
    init()
  })

  function init() {
    const table = document.getElementById('table')
    for (let i = 0; i < 5; ++i) {
      const tr = document.createElement('tr')

      for (let j = 0; j < 5; ++j) {
        const td = document.createElement('td')
        const index = i * 5 + j
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
      click({ srcElement: { index: Math.floor(Math.random() * 25) } })
    }
  }

  //   indexの条件分岐
  function click(e) {
    const i = e.srcElement.index

    // 下のタイル
    if (i - 5 >= 0 && tiles[i - 5].value === 0) {
      swap(i, i - 5)
    }
    // 上のタイル
    else if (i + 5 < 25 && tiles[i + 5].value === 0) {
      swap(i, i + 5)
    }
    // 左のタイル
    else if (i % 5 !== 0 && tiles[i - 1].value === 0) {
      swap(i, i - 1)
    }
    // 右のタイル
    else if (i % 5 !== 4 && tiles[i + 1].value === 0) {
      swap(i, i + 1)
    }
  }

  //   タイルの表示される文字とvalueを入れ替える
  function swap(i, j) {
    const beforetmp = tiles[i].value
    tiles[i].textContent = ''
    tiles[i].value = tiles[j].value
    tiles[j].textContent = beforetmp
    tiles[j].value = beforetmp
  }
})()
