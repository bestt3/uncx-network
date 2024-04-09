interface Token {
  address?: Address | null;
  name: string;
  symbol: string;
  image: string;
  decimals: number;
  price?: string;
  balance?: number;
}

interface User {
  wallet_address: string;
  ref_address: string;
}

type Address = `0x${string}`;

type ChainId = 56;
