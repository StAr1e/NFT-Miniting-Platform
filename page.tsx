import Link from "next/link"
import { ArrowRight, Gem, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Gem className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">NFTMint</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/explore"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Explore
              </Link>
              <Link
                href="/create"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Create
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="default">
                <Link href="/connect">Connect Wallet</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create, Collect, and Sell Digital Art
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    NFTMint is the premier platform for artists and collectors to mint, buy, and sell unique digital
                    assets secured on the blockchain.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/create">
                      Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/explore">Explore Collection</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl border bg-gradient-to-br from-purple-100 to-indigo-100 p-4 dark:from-purple-950/30 dark:to-indigo-950/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20"></div>
                  <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <div className="rounded-full bg-primary/10 p-6">
                      <Gem className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Featured NFT</h3>
                    <p className="text-muted-foreground">
                      This could be your next digital masterpiece. Start creating today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose NFTMint?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides everything you need to create, manage, and sell your digital assets with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Blockchain</h3>
                <p className="text-muted-foreground">
                  Your digital assets are secured on the blockchain with verifiable ownership and provenance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Easy Minting</h3>
                <p className="text-muted-foreground">
                  Our user-friendly interface makes it simple to mint your NFTs with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Global Marketplace</h3>
                <p className="text-muted-foreground">
                  Connect with collectors worldwide and sell your creations on our vibrant marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Gem className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 NFTMint. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

