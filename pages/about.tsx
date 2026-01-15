import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="content-page">
        <h1>About Terratrust</h1>
        
        <section>
          <h2>🚨 The Problem</h2>
          <p>
            In Nigeria, land fraud costs citizens millions of dollars annually. 
            Common problems include:
          </p>
          <ul>
            <li><strong>Double Selling:</strong> The same land sold to multiple buyers</li>
            <li><strong>Fake Documents:</strong> Forged survey plans and ownership papers</li>
            <li><strong>Court Disputes:</strong> Years of legal battles over ownership</li>
            <li><strong>Financial Loss:</strong> Families lose life savings to scammers</li>
          </ul>
        </section>

        <section>
          <h2>✨ Our Solution</h2>
          <p>
            Terratrust uses blockchain technology to create an immutable, 
            transparent land registry. Once land is registered on Starknet, 
            its ownership record cannot be altered, forged, or disputed.
          </p>
        </section>

        <section>
          <h2>🔗 Why Starknet?</h2>
          <ul>
            <li><strong>Low Costs:</strong> Affordable transactions for everyday Nigerians</li>
            <li><strong>Fast Transactions:</strong> Instant verification and registration</li>
            <li><strong>Proven Security:</strong> Cairo's mathematical guarantees</li>
            <li><strong>Scalability:</strong> Ready for nationwide adoption</li>
          </ul>
        </section>

        <section>
          <h2>🌍 Our Vision</h2>
          <p>
            Start in Nigeria. Scale globally. Empower citizens to own land 
            with confidence, transparency, and security.
          </p>
          <p>
            We envision a future where land fraud is impossible, where ownership 
            is transparent, and where blockchain technology protects the most 
            valuable asset for millions of families.
          </p>
        </section>

        <section>
          <h2>👥 The Team</h2>
          <p>
            Built by blockchain developers, land rights advocates, and 
            Nigerians who have witnessed land fraud firsthand. We're on a 
            mission to restore trust in land ownership.
          </p>
        </section>
      </div>
    </Layout>
  );
}
