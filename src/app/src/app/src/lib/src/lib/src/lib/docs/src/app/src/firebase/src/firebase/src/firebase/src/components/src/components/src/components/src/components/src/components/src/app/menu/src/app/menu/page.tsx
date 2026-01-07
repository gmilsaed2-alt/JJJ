import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES, PRODUCTS } from "@/lib/data";

export default function MenuPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="mb-8 text-center font-headline text-4xl font-bold">قائمة الطعام</h1>
          <Tabs defaultValue={CATEGORIES[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
              {CATEGORIES.map(category => (
                <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
              ))}
            </TabsList>
            
            {CATEGORIES.map(category => (
              <TabsContent key={category.id} value={category.id}>
                {PRODUCTS.filter(p => p.category === category.id).length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {PRODUCTS.filter(p => p.category === category.id).map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center text-muted-foreground">
                    <p>لا توجد منتجات في هذا القسم حاليًا.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
