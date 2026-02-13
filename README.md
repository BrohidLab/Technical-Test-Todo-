<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

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
