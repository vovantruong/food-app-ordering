import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "500", "700", "900"] });

export const metadata = {
    title: "Food App Ordering",
    description: "Food App Ordering",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <main className="max-w-4xl mx-auto p-4">
                    {children}
                </main>
            </body>

        </html>
    );
}
