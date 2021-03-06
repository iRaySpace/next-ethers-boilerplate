import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export function useController() {
  // ethers functionality
  let provider: ethers.providers.Web3Provider = null
  let signer: ethers.providers.JsonRpcSigner = null

  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')

  useEffect(() => {
    ;(async () => {
      // initialize provider and signer
      await (window as any).ethereum.enable()
      provider = new ethers.providers.Web3Provider((window as any).ethereum)
      signer = provider.getSigner()

      // get balance and address
      const address = await signer.getAddress()
      setAddress(address)

      const balance = await provider.getBalance(address)
      setBalance(ethers.utils.formatEther(balance))
    })()
  }, [])

  return { provider, signer, address, balance }
}
