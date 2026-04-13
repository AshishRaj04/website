import { Suspense, lazy } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import SEO from "./components/SEO";

// Lazy load components
const Projects = lazy(() => import("./components/Projects"));
const Blog = lazy(() => import("./components/Blog"));
const Tweets = lazy(() => import("./components/Tweets"));
const PostPage = lazy(() => import("./components/[slug]/page"));

export default function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="max-w-2xl mx-auto px-5 py-8 md:py-12 min-h-screen flex flex-col font-sans">
        <SEO />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <div className="flex flex-col gap-10 md:gap-14">
                  <Hero />
                  <About />
                </div>
              }
            />
            <Route
              path="/notes"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Tweets />
                </Suspense>
              }
            />
            <Route
              path="/blogs"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/posts/:slug"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <PostPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <h1 className="text-4xl font-bold text-zinc-900 mb-4">404</h1>
                  <p className="text-zinc-500 mb-6">This page doesn't exist.</p>
                  <Link to="/" className="text-zinc-900 font-semibold hover:text-zinc-500 transition-colors">
                    ← Back to Home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}
