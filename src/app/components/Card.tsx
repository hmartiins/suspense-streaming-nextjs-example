interface CardProps {
  index: number;
}

export async function Card({ index }: CardProps) {
  const timeoutSeconds = (1 + index) * 1000;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A Promise foi resolvida após 2 segundos!");
    }, timeoutSeconds);
  });

  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Streaming
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Exemplo de streaming utilizando NextJS
      </p>
    </a>
  );
}
