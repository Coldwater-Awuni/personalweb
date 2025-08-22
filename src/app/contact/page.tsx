import { Header } from '@/components/layout/header'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12">
          <h1 className="font-heading text-4xl md:text-6xl mb-12">Get in Touch</h1>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border bg-background px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border bg-background px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border bg-background px-3 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl mb-4">Connect</h2>
                <div className="space-y-4">
                  <a href="https://github.com/yourusername" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/yourusername" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-2xl mb-4">Location</h2>
                <p className="text-muted-foreground">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
