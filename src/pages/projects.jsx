import '../index.css';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/project';
import React from 'react';
import FadeIn from '../components/FadeIn';
import pocketForest from '../images/pocket-forest-3.png';
import mafia from '../images/mafia.png';
import fefo from '../images/fefo-3.png';
import cal12 from '../images/cal12.png';
import tapia from '../images/tapia.png';
import amex from '../images/amex.png';

function ProjectPage() {
    const projects = [
        {
            id: "1",
            name: "Pocket Forest",
            description: "Pocket Forest is a privacy-first iOS emotional wellness app where all processing happens on-device using Apple Intelligence. Track your mood, voice-journal your thoughts with on-device transcription, and watch a virtual forest grow as you build consistency — your data never leaves your device.",
            imageUrl: pocketForest,
            showUrl: true,
            url: "https://pocketforest.app/",
            github: "https://github.com/ardahk/pocket-garden"
        },
        {
            id: "2",
            name: "Mafia (Werewolf Agent)",
            description: "An LLM agents benchmark built for CS 194 at UC Berkeley that evaluates AI social intelligence through Werewolf/Mafia gameplay. Features role-specific AI agents (werewolf, detective, doctor, villager), a night phase action system, ELO rating tracking, and an AgentBeats-compatible API for testing deception, persuasion, and strategic coordination.",
            imageUrl: mafia,
            github: "https://github.com/ardahk/mafia"
        },
        {
            id: "3",
            name: "FeFo",
            description: "FeFo (Free Food) is a campus-first iOS app for UC Berkeley students to discover and share free food at campus events. Features an interactive map with color-coded event pins, RSVP and comment systems, a community leaderboard, and real-time event posting powered by Firebase and SwiftUI.",
            imageUrl: fefo,
            github: "https://github.com/ardahk/fefo"
        },
        {
            id: "4",
            name: "LLM Trading Arena",
            description: "A full-stack multi-agent AI trading system where Claude and Gemini compete in stock market simulations using a structured bull-vs-bear debate mechanism before every trade decision. Features a FastAPI backend with specialized analyst and trader agents, real sentiment data from Reddit and Twitter, and a Next.js dashboard with explainable AI reasoning. Built for Cal Hacks.",
            imageUrl: cal12,
            github: "https://github.com/ardahk/cal12.0"
        },
        {
            id: "5",
            name: "Campus Connect",
            description: "Campus Connect is a mobile-first web app that helps students discover campus events and find compatible attendees to go with. Uses Jaccard similarity and Google Gemini to match students by interests and schedule, auto-forms group chats, and generates AI-powered warm introductions between matches. Joint 1st Place Overall Winner at Tapia 2025 Hackathon.",
            imageUrl: tapia,
            github: "https://github.com/ardahk/tapia25"
        },
        {
            id: "6",
            name: "Amex Two-Tower Recommendation",
            description: "An attentive recommendation engine developed with American Express during Break Through Tech AI. Built on a two-tower architecture with attention mechanisms to generate user and item embeddings, capturing complex interaction patterns to personalize financial product recommendations at scale.",
            imageUrl: amex,
            github: "https://github.com/ardahk/amex"
        }
    ]
    return (
        <>
        <FontAwesomeIcon icon={faHome} size="xl" style={{cursor: 'pointer', position: 'fixed', top: '15px', left: '15px', zIndex: 999}} onClick={() => window.location.href="/"} className="home" />
            <FadeIn>
                <div className='projectPage'>
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            showUrl={project.showUrl}
                            url={project.url}
                            github={project.github}
                        />
                    )
                    )}
                </div>
            </FadeIn>
        </>
    )
}

export default ProjectPage;