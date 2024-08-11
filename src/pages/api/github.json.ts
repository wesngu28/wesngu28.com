import type { APIRoute } from 'astro'
import { GITHUB_PERSONAL_TOKEN } from 'astro:env/server'

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const repoName = params.get('repo')
  const author = params.get('author')

  const response = await fetch(`https://api.github.com/repos/${author}/${repoName}/languages`, {
    headers: {
      authorization: `token ${GITHUB_PERSONAL_TOKEN}`,
    },
  })

  const languages = await response.json()
  const langLines: Array<number> = Object.values(languages)
  const lines = langLines.reduce((a, b) => a + b, 0)
  Object.keys(languages).forEach(language => {
    languages[language] = 100 * (languages[language] / lines)
  })
  return new Response(JSON.stringify(languages))
}
