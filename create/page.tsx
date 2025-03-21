"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, ImagePlus, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function CreatePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [isMinting, setIsMinting] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false)
      setPreviewUrl(URL.createObjectURL(file))
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!previewUrl) {
      toast({
        title: "Error",
        description: "Please upload an image for your NFT",
        variant: "destructive",
      })
      return
    }

    if (!formData.name || !formData.description || !formData.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsMinting(true)

    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false)
      toast({
        title: "Success!",
        description: "Your NFT has been minted successfully",
      })
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create New NFT</h1>
          <p className="text-muted-foreground">
            Upload your artwork and fill in the details to mint your unique digital asset.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Artwork</CardTitle>
                <CardDescription>
                  Supported formats: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div
                    className={`relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${
                      previewUrl ? "border-primary/50" : "border-muted-foreground/25"
                    } bg-muted/50 transition-colors hover:border-primary/50`}
                  >
                    {isUploading ? (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Uploading...</span>
                      </div>
                    ) : previewUrl ? (
                      <div className="relative h-full w-full">
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="NFT Preview"
                          className="h-full w-full rounded-md object-cover"
                        />
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          className="absolute bottom-4 right-4"
                          onClick={() => setPreviewUrl(null)}
                        >
                          Change
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 p-8 text-center">
                        <ImagePlus className="h-8 w-8 text-muted-foreground" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">Drag and drop or click to upload</p>
                          <p className="text-xs text-muted-foreground">
                            High quality artwork recommended (at least 1000x1000px)
                          </p>
                        </div>
                      </div>
                    )}
                    <Input
                      id="artwork"
                      type="file"
                      accept="image/*,video/*,audio/*,.glb,.gltf"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </div>
                  <Label htmlFor="artwork" className="cursor-pointer text-sm text-muted-foreground underline">
                    {previewUrl ? "Replace file" : "Select file"}
                  </Label>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>NFT Details</CardTitle>
                  <CardDescription>
                    Provide information about your digital asset to help collectors discover it.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. 'Cosmic Dreamscape #1'"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell the story behind this creation..."
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (ETH)</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.001"
                      min="0"
                      placeholder="0.05"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Royalties</CardTitle>
                  <CardDescription>
                    Earn a percentage of the sale price when your NFT is sold on the secondary market.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="royalties">Royalty Percentage (%)</Label>
                    <Input id="royalties" type="number" min="0" max="15" placeholder="10" />
                    <p className="text-xs text-muted-foreground">Recommended: 5-10%. Maximum: 15%.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <CardFooter className="flex justify-end border-t p-6">
            <Button type="submit" size="lg" disabled={isUploading || isMinting}>
              {isMinting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting NFT...
                </>
              ) : (
                <>
                  Create NFT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </div>
    </div>
  )
}

