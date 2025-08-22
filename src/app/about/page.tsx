import { Header } from '@/components/layout/header'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12">
          <h1 className="font-heading text-4xl md:text-6xl mb-8">About Me</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              I&apos;m a software developer and technical maker based in Accra, Ghana. I combine software development expertise with hands-on technical skills to create innovative solutions.
            </p>
            <h2>What I Do</h2>
            <ul>
              <li>Build scalable web and mobile applications</li>
              <li>Create digital designs and 3D models</li>
              <li>Develop hardware solutions and prototypes</li>
              <li>Provide technical consulting and repairs</li>
            </ul>
            <a
              href="/resume.pdf"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
