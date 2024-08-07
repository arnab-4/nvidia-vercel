
<h1 align="center">Next.js AI Chatbot — NVIDIA NIM + Vercel AI SDK</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/NVIDIA-76B900.svg?style=for-the-badge&logo=NVIDIA&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">
</p>

<p align="center">
  <a href="https://nvidia-vercel.vercel.app/" target="_blank">
    <img src="https://nvidia-vercel.vercel.app/og.png" alt="Banner Image" />
  </a>
</p>

<p align="center">An open-source AI chatbot app template built with Next.js, Vercel AI SDK, and NVIDIA NIM.</p>

## ✨ Features

- **Next.js** 14 App Router
- React Server Components (RSCs) for better performance
- **NVIDIA NIM** API Inference
- **Vercel AI** SDK for streaming chat responses
- **shadcn/ui** for UI components
- **Tailwind CSS** for styling and design
- Custom rate limiter for server actions
- **Sonner** for beautiful toast notifications
- **Vercel OG** for open graph images

## 🛠️ How It Works

This template uses the NVIDIA NIM API to fetch models and make inferences. The Vercel AI SDK streams the responses from the server to the client in real-time.

## ⚙️ Custom Rate Limiter

NVIDIA NIM provides 1000 credits for free to every new user. A custom rate limiter prevents users from exceeding this limit, set to 10 requests per hour per IP address. You can modify the rate limiter settings in the [`ratelimit.ts`](lib/ratelimit.ts) file.

## 📚 Models Available via NVIDIA NIM

Only text-to-text models are included in this template. More models can be added by following the instructions in the [NVIDIA NIM documentation](https://build.nvidia.com/docs/nim/).

### Google

- `gemma-2b`
- `gemma-2-9b-it`
- `gemma-2-27b-it`

### Meta

- `llama3-8b-instruct`
- `llama3-70b-instruct`

### NVIDIA

- `llama3-chatqa-1.5-8b`
- `llama3-chatqa-1.5-70b`
- `nemotron-4-340b-instruct`

### IBM

- `granite-8b-code-instruct`
- `granite-34b-code-instruct`

> Note: `Mistral AI` and other models available via NVIDIA NIM are not compatible with the Vercel AI SDK at the moment.

## 🚀 Deploy Your Own

Deploy your version of this template with Vercel by clicking the button below.

[![Deploy with Vercel](https://vercel.com/button)]()

## 🖥️ Local Development

1. Use the environment variables defined in [`.env.example`](.env.example) to create a `.env.local` file in the project's root. Ensure not to commit this file to the repository.

```bash
NVIDIA_NIM_API_KEY=
```

2. Get the NVIDIA NIM API key by signing up on the [NVIDIA NIM website](https://build.nvidia.com/explore/discover/).

3. Clone the repository and install the dependencies using `bun`:

```bash
bun install
```

4. Run the development server:

```bash
bun dev
```

The app should be running at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas or suggestions.

## 📜 License

This template is open-source and free to use. Feel free to use it however you like.
