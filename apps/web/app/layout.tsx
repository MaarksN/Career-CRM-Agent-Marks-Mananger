import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Job Match OS Foundation",
  description: "Phase 1 monorepo foundation for Career CRM Agent Marks Manager"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: "#f6f8fb",
          color: "#14213d",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}
      >
        {children}
      </body>
    </html>
  );
}
