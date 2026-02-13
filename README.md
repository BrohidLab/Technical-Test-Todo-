<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Todo App – Test Project</title>
<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; padding: 2rem; background: #f4f6f8; color: #1a1a1a; }
  h1 { color: #2c3e50; font-size: 2.2rem; margin-bottom: 0.5rem; }
  h2 { color: #34495e; margin-top: 2rem; margin-bottom: 0.5rem; font-size: 1.5rem; border-bottom: 2px solid #ecf0f1; padding-bottom: 0.3rem; }
  h3 { color: #34495e; margin-top: 1.5rem; margin-bottom: 0.3rem; }
  p { margin-bottom: 1rem; }
  pre { background: #2d2d2d; color: #f8f8f2; padding: 1rem; border-radius: 6px; overflow-x: auto; }
  code { background: #ecf0f1; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
  ul, ol { padding-left: 2rem; margin-bottom: 1rem; }
  li { margin-bottom: 0.5rem; }
  hr { border: none; border-top: 1px solid #bdc3c7; margin: 2rem 0; }
  blockquote { border-left: 4px solid #3498db; padding-left: 1rem; color: #555; font-style: italic; background: #ecf0f1; padding: 1rem; border-radius: 4px; }
  .badge { display: inline-block; padding: 0.25rem 0.6rem; font-size: 0.8rem; font-weight: bold; color: white; background: #3498db; border-radius: 4px; margin-right: 0.5rem; text-decoration: none; }
  .badge.node { background: #3c873a; }
  .badge.nest { background: #e0234e; }
  .badge.next { background: #000000; }
  img.screenshot { max-width: 100%; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); margin-top: 1rem; }
</style>
</head>
<body>

<h1>📝 Todo App – Test Project</h1>

<p>A modern <strong>Todo List</strong> application with <strong>AI Recommendation</strong> feature.</p>

<!-- Badges -->
<p>
  <a class="badge node" href="https://nodejs.org/" target="_blank">Node.js</a>
  <a class="badge nest" href="https://nestjs.com/" target="_blank">NestJS</a>
  <a class="badge next" href="https://nextjs.org/" target="_blank">Next.js</a>
</p>

<h2>Monorepo structure:</h2>

<pre><code>todo/
├── backend/   # NestJS API
└── frontend/  # Next.js + TailwindCSS frontend
</code></pre>

<hr>

<h2>🛠 Requirements</h2>

<ul>
<li><strong>Node.js</strong> v20.x or newer<br>
Check version:
<pre><code>node -v</code></pre>
</li>
<li><strong>npm</strong> v10.x or newer (optional, recommended)</li>
</ul>

<hr>

<h2>🚀 Getting Started</h2>

<h3>1️⃣ Backend (NestJS)</h3>

<p>Install dependencies & start server:</p>

<pre><code>cd backend
npm install
npm run start:dev
</code></pre>

<p>Backend runs on:</p>

<pre><code>http://localhost:3001</code></pre>

<blockquote>NestJS development mode (<code>start:dev</code>) includes hot reload.</blockquote>

<h3>2️⃣ Frontend (Next.js)</h3>

<p>Install dependencies & start development server:</p>

<pre><code>cd frontend
npm install
npm run dev
</code></pre>

<p>Frontend runs on:</p>

<pre><code>http://localhost:3000</code></pre>

<!-- Screenshot (opsional) -->
<!-- <img class="screenshot" src="screenshot.png" alt="Todo App Screenshot"> -->

<hr>

<h2>⚙️ Technical Decisions</h2>

<ol>
<li><strong>Next.js for Frontend</strong><br>Modern React framework with App Router, ideal for scalable and maintainable projects.</li>
<li><strong>TailwindCSS</strong><br>Utility-first styling for rapid UI development and clean, consistent design.</li>
<li><strong>NestJS for Backend with AI Recommendation</strong>
  <ul>
    <li>Keeps API logic structured and modular</li>
    <li>Handles AI requests securely</li>
    <li>Supports scalability with modules and controllers</li>
  </ul>
</li>
</ol>

</body>
</html>
