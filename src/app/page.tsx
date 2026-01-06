import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRODUCTS, STORE_SETTINGS } from '@/lib/data';
import type { Product } from '@/lib/types';
import { UtensilsCrossed, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { NotificationPermission } from '@/components/NotificationPermission';

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <NotificationPermission />

        <section id="featured" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  الأصناف المميزة
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  تذوق أشهى العصائر والسندوتشات المحضرة بحب وشغف.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {featuredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/menu">
                  اكتشف القائمة الكاملة
                  <UtensilsCrossed className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                تواصل معنا
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                نحن هنا لخدمتك على مدار الساعة. تفضل بزيارتنا أو اطلب الآن!
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-8">
               <Card className="overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                    <Image 
                        src="/alkhair-banner.jpg" 
                        alt="لوحة كافتيريا الخير" 
                        fill
                        className="object-cover"
                    />
                </div>
               </Card>
               <Card className="text-right">
                <CardHeader>
                    <CardTitle className="text-center font-headline">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p><strong>العنوان:</strong> {STORE_SETTINGS.address}</p>
                    <p dir="ltr" className="text-center font-sans">
                      <a href={`tel:${STORE_SETTINGS.phone1}`} className="hover:underline">{STORE_SETTINGS.phone1}</a> | <a href={`tel:${STORE_SETTINGS.phone2}`} className="hover:underline">{STORE_SETTINGS.phone2}</a>
                    </p>
                    <p><strong>أوقات العمل:</strong> {STORE_SETTINGS.workingHours}</p>
                    <p><strong>التوصيل:</strong> {STORE_SETTINGS.deliveryPolicy}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={STORE_SETTINGS.mapsLink} target="_blank" rel="noopener noreferrer">
                        عرض الموقع على الخريطة
                        <MapPin className="mr-2 h-4 w-4"/>
                      </a>
                    </Button>
                </CardContent>
               </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
