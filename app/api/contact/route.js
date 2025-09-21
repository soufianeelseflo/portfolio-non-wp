export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields.' }), { status: 400 });
    }
    console.log('New contact message:', { name, email, message, at: new Date().toISOString() });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400 });
  }
}
