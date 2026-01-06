"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Product, Size } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);
  const productImage = PlaceHolderImages.find(img => img.id === product.imageId);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
  };

  const handleSizeChange = (sizeName: string) => {
    const newSize = product.sizes.find(s => s.name === sizeName);
    if (newSize) {
      setSelectedSize(newSize);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          {productImage && (
             <Image
                src={productImage.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={productImage.imageHint}
             />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-xl mb-1">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4 p-4 pt-0">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            {selectedSize.price.toLocaleString('ar-EG')}
            <span className="text-sm"> ر.ي</span>
          </span>
          {product.sizes.length > 1 ? (
             <Select
                dir="rtl"
                value={selectedSize.name}
                onValueChange={handleSizeChange}
              >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="اختر الحجم" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map(size => (
                  <SelectItem key={size.name} value={size.name}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <span className="text-muted-foreground">{selectedSize.name}</span>
          )}
        </div>
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="ml-2 h-4 w-4" />
          إضافة للسلة
        </Button>
      </CardFooter>
    </Card>
  );
}
