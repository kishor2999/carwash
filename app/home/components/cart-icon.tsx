"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";

export default function CartIcon() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button variant="outline" size="icon" className="relative" asChild>
      <Link href="/dashboard/user/cart">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
          >
            {itemCount}
          </Badge>
        )}
        <span className="sr-only">Shopping cart</span>
      </Link>
    </Button>
  );
}
