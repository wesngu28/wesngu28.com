export function observer() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  const posts = document.querySelectorAll('.clienthide')
  posts.forEach(post => observer.observe(post))
}
