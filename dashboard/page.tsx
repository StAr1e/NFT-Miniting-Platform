"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Grid3X3, LayoutGrid, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletConnect } from "@/components/wallet-connect"

export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false)

  // Sample NFT data - in a real app, this would come from the blockchain
  const myNFTs = [
    {
      id: 1,
      name: "Abstract Dimensions #1",
      price: "0.05 ETH",
      creator: "You",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Digital Landscape #7",
      price: "0.08 ETH",
      creator: "You",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Neon Dreams #3",
      price: "0.12 ETH",
      creator: "You",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  if (!isConnected) {
    return (
      <div className="container flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-10">
        <Card className="mx-auto max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
            <CardDescription>
              Connect your wallet to view your NFTs, track sales, and manage your collection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WalletConnect onConnect={() => setIsConnected(true)} />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Creator Dashboard</h1>
            <p className="text-muted-foreground">Manage your NFTs, track sales, and view analytics.</p>
          </div>
          <Button asChild>
            <Link href="/create">
              <Plus className="mr-2 h-4 w-4" /> Create New NFT
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total NFTs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myNFTs.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.25 ETH</div>
              <p className="text-xs text-muted-foreground">+0.15 ETH from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Royalties Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.03 ETH</div>
              <p className="text-xs text-muted-foreground">+0.01 ETH from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="created">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="created">Created</TabsTrigger>
              <TabsTrigger value="collected">Collected</TabsTrigger>
              <TabsTrigger value="favorited">Favorited</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <LayoutGrid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button variant="outline" size="icon">
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>
          <TabsContent value="created" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {myNFTs.map((nft) => (
                <Card key={nft.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square w-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{nft.name}</h3>
                      <p className="text-sm text-muted-foreground">Created by {nft.creator}</p>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-between">
                      <span className="text-sm font-medium">{nft.price}</span>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/nft/${nft.id}`}>
                          View <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="collected" className="mt-6">
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-sm text-muted-foreground">You haven't collected any NFTs yet.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link href="/explore">Explore NFTs</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="favorited" className="mt-6">
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-sm text-muted-foreground">You haven't favorited any NFTs yet.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link href="/explore">Explore NFTs</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

