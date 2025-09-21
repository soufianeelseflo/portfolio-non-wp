import { getGithubRepos } from '../../../../lib/github';

export const revalidate = 3600; // cache 1h

export async function GET() {
  try {
    const data = await getGithubRepos();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'GitHub API error', detail: error.message }), { status: 500 });
  }
}
