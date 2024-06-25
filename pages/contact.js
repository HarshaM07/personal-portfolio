// pages/contact.js
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">
          <strong>Address:</strong> #180 5th cross KHB Udayagiri, Mysore
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 6361879668
        </p>
        <p className="mb-2">
          <strong>Email:</strong> harshamvviet@gmail.com
        </p>
        <p className="mb-2">
          <a
            href="https://github.com/Harsham7"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </p>
        <p className="mb-2">
          <a
            href="https://www.linkedin.com/in/harsha-m-4031131a4"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </Layout>
  );
}
