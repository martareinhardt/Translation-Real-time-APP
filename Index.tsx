import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ChatInterface } from "@/components/ChatInterface";
import { Integration } from "@/components/Integration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ChatInterface />
      <Integration />
    </div>
  );
};

export default Index;
