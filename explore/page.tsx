import Link from "next/link"
import { Filter, Grid3X3, LayoutGrid } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NFTGallery } from "@/components/nft-gallery"

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Explore NFTs</h1>
              <p className="text-muted-foreground">
                Discover unique digital assets created by artists from around the world.
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="Search collections or creators..." />
                <Button type="submit" size="icon" variant="ghost">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
              <Tabs defaultValue="grid">
                <TabsList>
                  <TabsTrigger value="grid">
                    <LayoutGrid className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list">
                    <Grid3X3 className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Tabs defaultValue="grid" className="w-full">
              <TabsContent value="grid" className="mt-0">
                <NFTGallery />
              </TabsContent>
              <TabsContent value="list" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square w-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-6">
                          <div className="flex h-full items-center justify-center rounded-md bg-muted/50">
                            <span className="text-2xl font-bold text-muted-foreground">#{i + 1}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start p-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">NFT #{i + 1}</h3>
                          <p className="text-sm text-muted-foreground">By Creator {i + 1}</p>
                        </div>
                        <div className="mt-2 flex w-full items-center justify-between">
                          <span className="text-sm font-medium">0.05 ETH</span>
                          <Button asChild size="sm" variant="outline">
                            <Link href={`/nft/${i + 1}`}>View</Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

