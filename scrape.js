globalThis.fetch('https://4ucit.com/meet-our-team/').then(r=>r.text()).then(html=>{
  console.log([...html.matchAll(/img[^>]+src=\"([^\"]+)\"/g)].map(m=>m[1]).filter(url => url.includes('uploads')).join('\n'))
})
