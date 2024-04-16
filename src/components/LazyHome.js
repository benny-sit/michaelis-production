"use client";
import React, { Suspense, lazy, useEffect } from "react";
import Nav from "./ui/Nav";
// import Hero from "./Hero";
// import OurInterviews from "./OurInterviews";
// import OurJournalists from "./OurJournalists";
// import ContactUs from "./ContactUs";
import Footer from "./ui/Footer";
import dynamic from "next/dynamic";
import AboutUs from "./AboutUs";
const Hero = lazy(() => {
  return Promise.all([
    import("@/components/Hero"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExported]) => moduleExported);
});
// const OurInterviews = lazy(() => {
//   return Promise.all([
//     import("@/components/OurInterviews"),
//     new Promise((resolve) => setTimeout(resolve, 1500)),
//   ]).then(([moduleExported]) => moduleExported);
// });
const OurInterviews = lazy(() => import("@/components/OurInterviews"));
const ContactUs = lazy(() => import("@/components/ContactUs"));
const OurJournalists = lazy(() => import("@/components/OurJournalists"));
// const Footer = lazy(() => import("@/components/ui/Footer"));
// const Nav = lazy(() => import("@/components/ui/Nav"));

function LazyHome() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Nav />
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <AboutUs />
        <Suspense fallback={null}>
          <OurInterviews />
          <OurJournalists />
          <ContactUs />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default LazyHome;
