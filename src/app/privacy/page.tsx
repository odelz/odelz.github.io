import Link from "next/link";

export default function Privacy() {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <nav className="mb-8">
          <Link 
            href="/"
            className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-200 flex items-center gap-2"
          >
            ← Back to home
          </Link>
        </nav>

        
        <h1 className="text-4xl font-nunito mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Overview</h2>
            <p>
              This privacy policy outlines how odelz.github.io ("the Website") handles information 
              when you visit and interact with our site.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Information Collection</h2>
            <h3 className="text-xl mb-2">Log Data</h3>
            <p>
              The Website is hosted on GitHub Pages, which may collect and store server logs 
              including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP addresses</li>
              <li>Browser type and version</li>
              <li>Time and date of visits</li>
              <li>Pages visited</li>
            </ul>
  
            <h3 className="text-xl mb-2">Third-Party Services</h3>
            <p>The Website uses the following third-party services:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>GitHub Pages for hosting</li>
              <li>Google Fonts for typography</li>
              <li>React Icons for iconography</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Data Usage</h2>
            <p>
              Any collected data is used solely for the purpose of improving website 
              performance and user experience. We do not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sell or share personal data</li>
              <li>Use tracking cookies</li>
              <li>Collect personally identifiable information</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Contact</h2>
            <p>
              For any privacy-related questions, please reach out through my GitHub profile.
            </p>
          </section>
  
          <footer className="text-sm text-gray-500 mt-12 pt-4 border-t">
            <p>Last updated: March 7, 2025</p>
          </footer>
        </div>
      </div>
    );
  }