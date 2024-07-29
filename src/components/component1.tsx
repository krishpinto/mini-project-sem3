/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5ye5o3GWWpx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component1() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-background shadow">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-medium">Quantum Computing Simulator</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Main
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Help
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to Acme Inc</h1>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Acme Inc is a leading provider of innovative solutions for businesses of all sizes. Our platform
                    offers a wide range of features to help you streamline your operations and drive growth.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Key Features</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Automated workflows and integrations
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Real-time analytics and reporting
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Scalable and secure infrastructure
                    </li>
                    <li>Dedicated customer support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container space-y-10 xl:space-y-16">
              <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Welcome to Acme Inc
                  </h1>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Acme Inc is a leading provider of innovative solutions for businesses of all sizes. Our platform
                    offers a wide range of features to help you streamline your operations and drive growth.
                  </p>
                  <div className="space-x-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Explore Main
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}