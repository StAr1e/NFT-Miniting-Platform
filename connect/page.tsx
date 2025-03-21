"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Shield } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletConnect } from "@/components/wallet-connect"
import { useToast } from "@/hooks/use-toast"

export default function ConnectPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = () => {
    setIsConnecting(true)

    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been successfully connected.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-10">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Connect Your Wallet</h1>
          <p className="text-muted-foreground">
            Connect your wallet to access your NFTs, create new assets, and participate in the marketplace.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Choose Connection Method</CardTitle>
            <CardDescription>Select your preferred wallet to connect to our platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <WalletConnect onConnect={handleConnect} isConnecting={isConnecting} />
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            By connecting your wallet, you agree to our{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

