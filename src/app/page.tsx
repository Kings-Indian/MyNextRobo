import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GetStartedSections from '../components/GetStartedSections';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <GetStartedSections />
    </div>
  );
}
