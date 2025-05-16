import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export function ViewPDFSection() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Dynamically resolve the base URL
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section id="view-pdf" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">View My Resume</h2>
        <p className="text-muted-foreground mb-6">
          You can view, zoom in/out, or download my resume below.
        </p>
        <div className="border rounded-lg shadow-md overflow-hidden">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={`${baseUrl}resume.pdf`} // Dynamically resolve the correct path
              plugins={[defaultLayoutPluginInstance]} // Enables zoom, download, and other features
            />
          </Worker>
        </div>
      </div>
    </section>
  );
}
