"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { type CoreMessage } from "ai";
import { BsNvidia } from "react-icons/bs";
import ChatInput from "./chat-input";
import { readStreamableValue } from "ai/rsc";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { continueConversation } from "../app/actions";
import { toast } from "sonner";
import remarkGfm from "remark-gfm";
import { MemoizedReactMarkdown } from "./markdown";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("google/gemma-2-9b-it");
  const messageEndRef = useRef<HTMLDivElement>(null);

  const handleModelChange = (newModel: string) => {
    setModel(newModel);
    setMessages([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    const newMessages: CoreMessage[] = [
      ...messages,
      { content: input, role: "user" },
    ];

    setMessages(newMessages);
    setInput("");

    try {
      const result = await continueConversation(newMessages, model);

      for await (const content of readStreamableValue(result)) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: content as string,
          },
        ]);
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="stretch mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-4 pb-[8rem] pt-[6rem] md:px-0 md:pt-[4rem] xl:pt-[2rem]">
        <h1 className="text-center text-5xl font-medium tracking-tighter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-all duration-150 ease-linear"
            href="https://build.nvidia.com/explore/discover">
            NVIDIA NIM
          </a>{" "}
          +{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-150 ease-linear hover:text-blue-600"
            href="https://sdk.vercel.ai/">
            Vercel AI SDK
          </a>{" "}
          Integration
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4">
          <BsNvidia className="text-green-600 mr-4 size-20" />
          <span className="text-8xl">+</span>
          <IoLogoVercel className="text-blue-600 size-20" />
        </div>

        <div className="mt-6 px-3 md:px-0">
          <h2 className="text-base font-medium">Important Information:</h2>
          <ul className="ml-6 mt-2 flex list-disc flex-col items-start gap-2.5 text-sm text-primary/80">
            <li>
              The NVIDIA NIM API provides{" "}
              <span className="text-green-600 font-medium">1000 free credits</span>.
              A rate limiter has been implemented to prevent abuse. If you hit a rate limit,
              please try again{" "}
              <span className="text-green-600 font-medium">after an hour</span>.
            </li>
            <li>
              Use of this demo assumes the risk of any potential harm caused by the model&apos;s responses.
              Avoid uploading confidential or personal data. Usage is logged for security purposes.
            </li>
            <li>
              This demo is for demonstration purposes only and is not affiliated with NVIDIA or Vercel.
            </li>
            <li>
              All logos and trademarks belong to their respective owners. This is a non-commercial project.
            </li>
          </ul>
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          model={model}
          handleModelChange={handleModelChange}
        />
      </div>
    );
  }

  return (
    <div className="stretch mx-auto w-full max-w-2xl px-4 py-[8rem] pt-24 md:px-0">
      {messages.map((m, i) => (
        <div key={i} className="mb-4 flex items-start p-2">
          <div
            className={cn(
              "flex size-8 shrink-0 select-none items-center justify-center rounded-lg",
              m.role === "user"
                ? "border bg-background"
                : "bg-green-600 border border-[#628f10] text-primary-foreground",
            )}>
            {m.role === "user" ? <FaUserAstronaut /> : <BsNvidia />}
          </div>
          <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
            <MemoizedReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-sm break-words dark:prose-invert prose-pre:rounded-lg prose-pre:bg-zinc-100 prose-pre:p-4 prose-pre:text-zinc-900 dark:prose-pre:bg-zinc-900 dark:prose-pre:text-zinc-100">
              {m.content as string}
            </MemoizedReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={messageEndRef} />
      <ChatInput
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        model={model}
        handleModelChange={handleModelChange}
      />
    </div>
  );
}
