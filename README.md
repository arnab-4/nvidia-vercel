
<h1 align="center">🚀 Next.js AI Chatbot — NVIDIA AI + Vercel AI SDK</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/NVIDIA-76B900.svg?style=for-the-badge&logo=NVIDIA&logoColor=white" alt="NVIDIA">
  <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white" alt="Vercel">
</p>

<p align="center">
  <a href="https://nvidia-vercel.vercel.app/" target="_blank">
    <img src="https://nvidia-vercel.vercel.app/og.png" alt="Banner Image" />
  </a>
</p>

<p align="center"><strong>An open-source AI chatbot template built with Next.js, Vercel AI SDK, and NVIDIA NIM.</strong></p>

---

## ✨ Features

- **Next.js 14 App Router** for seamless navigation
- **React Server Components (RSCs)** for enhanced performance
- **NVIDIA NIM** API for AI model inference
- **Vercel AI SDK** for real-time chat streaming
- **shadcn/ui** for sleek UI components
- **Tailwind CSS** for modern styling
- **Custom Rate Limiter** to manage API usage
- **Sonner** for beautiful toast notifications
- **Vercel OG** for dynamic open graph images

## 🛠️ How It Works

This template utilizes the NVIDIA AI API to retrieve models and perform inferences. The Vercel AI SDK enables streaming of responses from the server to the client in real-time, ensuring a smooth user experience.

## ⚙️ Custom Rate Limiter

NVIDIA NIM offers 1000 free credits to new users. A custom rate limiter, set to 10 requests per hour per IP address, ensures fair usage. Modify these settings in [`ratelimit.ts`](lib/ratelimit.ts).

## 📚 Available Models

This template includes several text-to-text models. Additional models can be integrated as per the [NVIDIA NIM documentation](https://build.nvidia.com/docs/nim/).

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

> **Note:** `Mistral AI` and other models are currently incompatible with the Vercel AI SDK.

## 🚀 Deploy Your Own

Deploy your version of this template on Vercel with a single click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🖥️ Local Development

1. **Environment Setup:** Create a `.env.local` file in the root directory based on [`.env.example`](.env.example). This file should not be committed.

   ```env
   NVIDIA_API_KEY=
   ```

2. **API Key:** Obtain an NVIDIA NIM API key by signing up on the [NVIDIA AI website](https://build.nvidia.com/explore/discover/).

3. **Clone and Install Dependencies:**

   ```bash
   git clone https://github.com/arnab-4/nvidia-vercel.git
   cd nvidia-vercel
   npm install
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

We welcome contributions! Feel free to open an issue or submit a pull request with your ideas and suggestions.

## 📜 License

This template is open-source and free to use. Feel free to adapt it to your needs.
