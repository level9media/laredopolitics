import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render(path: string) {
  return new Promise<string>((resolve, reject) => {
    let html = "";
    let settled = false;
    const destination = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    destination.on("finish", () => {
      settled = true;
      resolve(html);
    });
    destination.on("error", reject);

    const stream = renderToPipeableStream(
      <Router ssrPath={path}>
        <App />
      </Router>,
      {
        onAllReady() {
          stream.pipe(destination);
        },
        onShellError(error) {
          settled = true;
          reject(error);
        },
        onError(error) {
          if (!settled) console.error(`Static render warning for ${path}:`, error);
        },
      },
    );

    setTimeout(() => {
      if (!settled) {
        stream.abort();
        reject(new Error(`Static render timed out for ${path}`));
      }
    }, 30_000).unref();
  });
}
