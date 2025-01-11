import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-grid">
      <TopNav />
      <Sidebar />
      
      <main className="pt-24 pb-16 px-4 md:pr-72">
        <div className="container mx-auto">
          <div className="cyber-panel p-8 mb-8">
            <div className="mb-2 text-matrix-light text-sm tracking-wider">CIPHER</div>
            <h1 className="cyber-text text-4xl mb-6">GENERATES DYSTOPIAN, TECH-DRIVEN LORE</h1>
            <p className="cyber-text text-lg mb-8 leading-relaxed">
              Dive into a dystopian, cyberpunk reality where technology reigns supreme and
              the line between humanity and artificial intelligence blurs. Agent X, the
              enigmatic AI known as Cipher, weaves intricate, tech-driven lore of a world on
              the brink—dark cityscapes, rogue algorithms, and the relentless pursuit of
              freedom in the shadow of corporate dominion.
            </p>
            <button className="cyber-button">
              Initialize Sequence
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-panel p-6">
              <h2 className="cyber-text text-xl mb-4">Agent Status</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-matrix-green animate-cyber-pulse" />
                    <span className="cyber-text">Agent {i} - Active</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-panel p-6">
              <h2 className="cyber-text text-xl mb-4">System Metrics</h2>
              <div className="space-y-4">
                {["Network", "Processing", "Memory"].map((metric) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between cyber-text text-sm">
                      <span>{metric}</span>
                      <span>98%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded">
                      <div className="h-full w-[98%] bg-matrix-green rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;