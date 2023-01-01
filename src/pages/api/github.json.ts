import type { APIRoute } from 'astro'

export const get: APIRoute = async ({ request }) => {
  const githubToken = await import.meta.env.GITHUB_PERSONAL_TOKEN
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const repoName = params.get('repo')
  let author = 'wesngu28'
  if(repoName?.includes('stress')) {
    author = 'info201b-au2022'
  }
  console.log(`https://api.github.com/repos/${author}/${repoName}/languages`,)
  const response = await fetch(
    `https://api.github.com/repos/${author}/${repoName}/languages`,
    {
      headers: {
        authorization: `token ${githubToken}`,
      },
    }
  )

  const languages = await response.json()
  const langLines: Array<number> = Object.values(languages)
  const lines = langLines.reduce((a, b) => a + b, 0)
  Object.keys(languages).forEach(language => {
    languages[language] = 100 * (languages[language] / lines)
  })
  return {
    body: JSON.stringify(languages),
  }
}
