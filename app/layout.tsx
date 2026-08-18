import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
const inter=Inter({subsets:['latin'],variable:'--font-body'}); const display=Space_Grotesk({subsets:['latin'],variable:'--font-display'});
export const metadata:Metadata={title:'Sibtain Ahmed - Software Engineer',description:'Portfolio of Sibtain Ahmed, a Software Engineering student and SQA Intern at 1LINK (Pvt) Limited, showcasing software development projects, technical skills, QA experience, and certifications.',openGraph:{title:'Sibtain Ahmed - Software Engineer',description:'Software Engineering student and SQA Intern at 1LINK (Pvt) Limited.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>}
