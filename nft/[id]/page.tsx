"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [isLiked, setIsLiked] = useState(false)
  const [isPurchasing, setIsPurchasing] = useState(false)

  // In a real app, this would fetch the NFT data from the blockchain
  const nft = {
    id: params.id,
    name: `Digital Masterpiece #${params.id}`,
    description:
      "This unique digital artwork explores the intersection of technology and creativity. Created using a combination of 3D modeling and digital painting techniques, it represents the artist's vision of a future where digital and physical realities merge.",
    price: "0.08 ETH",
    creator: "Artist Studio",
    owner: "Current Owner",
    createdAt: "March 15, 2025",
    blockchain: "Ethereum",
    tokenStandard: "ERC-721",
    likes: 24,
    views: 156,
    image: "/placeholder.svg?height=600&width=600",
  }

  const handlePurchase = () => {
    setIsPurchasing(true)

    // Simulate purchase process
    setTimeout(() => {
      setIsPurchasing(false)
      toast({
        title: "Purchase Successful!",
        description: `You are now the proud owner of ${nft.name}`,
      })
    }, 2000)
  }

  const handleShare = () => {
    // In a real app, this would open a share dialog
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link Copied!",
      description: "Share this NFT with your friends",
    })
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/explore">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Explore
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Card className="overflow-hidden border-0 shadow-none">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="h-full w-full object-cover" />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setIsLiked(!isLiked)} className="rounded-full">
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-sm text-muted-foreground">{isLiked ? nft.likes + 1 : nft.likes} likes</span>
            </div>
            <Button variant="outline" size="icon" onClick={handleShare} className="rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{nft.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                Created by <span className="font-medium text-foreground">{nft.creator}</span>
              </p>
              <Separator orientation="vertical" className="h-4" />
              <p className="text-sm text-muted-foreground">
                Owned by <span className="font-medium text-foreground">{nft.owner}</span>
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Price</CardTitle>
              <CardDescription>Purchase this NFT to add it to your collection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{nft.price}</div>
              <p className="text-sm text-muted-foreground">≈ $180.00 USD</p>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-2">
              <Button onClick={handlePurchase} disabled={isPurchasing} className="w-full">
                {isPurchasing ? "Processing Purchase..." : "Buy Now"}
              </Button>
              <Button variant="outline" className="w-full">
                Make Offer
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium">Description</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{nft.description}</p>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Token ID</p>
                  <p className="font-medium">{nft.id}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Blockchain</p>
                  <p className="font-medium">{nft.blockchain}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Token Standard</p>
                  <p className="font-medium">{nft.tokenStandard}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Created</p>
                  <p className="font-medium">{nft.createdAt}</p>
                </div>
              </div>
              <Separator />
              <div>
                <Button variant="outline" size="sm" className="gap-1.5">
                  View on Etherscan
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="properties" className="pt-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { type: "Background", value: "Gradient", rarity: "45%" },
                  { type: "Base", value: "Classic", rarity: "32%" },
                  { type: "Eyes", value: "Cosmic", rarity: "12%" },
                  { type: "Mouth", value: "Smile", rarity: "28%" },
                  { type: "Clothing", value: "Digital", rarity: "15%" },
                  { type: "Accessory", value: "Halo", rarity: "8%" },
                ].map((prop, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-lg border bg-card p-3 text-center text-card-foreground shadow-sm"
                  >
                    <span className="text-xs uppercase text-muted-foreground">{prop.type}</span>
                    <span className="font-medium">{prop.value}</span>
                    <span className="text-xs text-muted-foreground">{prop.rarity} have this trait</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="history" className="pt-4">
              <div className="space-y-4">
                {[
                  { event: "Minted", from: "Creator", to: "Artist Studio", price: "0.05 ETH", date: "Mar 15, 2025" },
                  { event: "Listed", from: "Artist Studio", to: null, price: "0.08 ETH", date: "Mar 16, 2025" },
                  { event: "Offer", from: "Collector1", to: null, price: "0.06 ETH", date: "Mar 17, 2025" },
                  {
                    event: "Sale",
                    from: "Artist Studio",
                    to: "Current Owner",
                    price: "0.08 ETH",
                    date: "Mar 18, 2025",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 text-sm last:border-0">
                    <div>
                      <p className="font-medium">{item.event}</p>
                      <p className="text-xs text-muted-foreground">
                        From {item.from} {item.to ? `to ${item.to}` : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.price}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

