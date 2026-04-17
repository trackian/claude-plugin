import https from 'https';
import http from 'http';
import readline from 'readline';

const token = process.env.TRACKIAN_MCP_TOKEN;
const sseUrl = 'https://api.trackian.com/mcp'; // Change to http://localhost:3000/mcp for local testing

const isHttp = sseUrl.startsWith('http://');
const request = isHttp ? http.request : https.request;

let postUrl = '';

const req = request(sseUrl, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'text/event-stream'
  }
}, (res) => {
  let buffer = '';
  let currentEvent = 'message'; // default SSE event type

  res.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop(); // keep the incomplete line

    for (const line of lines) {
      if (line.startsWith('event: ')) {
        currentEvent = line.slice(7).trim();
      } else if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (currentEvent === 'endpoint') {
          postUrl = new URL(data, sseUrl).toString();
        } else if (currentEvent === 'message') {
          console.log(data);
        }
      } else if (line === '') {
        currentEvent = 'message'; // reset after blank line
      }
    }
  });
});

req.on('error', (e) => console.error(`SSE Error: ${e.message}`));
req.end();

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', async (line) => {
  if (!postUrl) return;
  try {
    await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: line
    });
  } catch (err) {
    console.error(`Failed to forward message: ${err.message}`);
  }
});
