"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Send, Loader2 } from "lucide-react";
import { STORE_SETTINGS } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState<{lat: number, lon: number} | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleLocation = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setIsLocating(false);
        toast({ title: "تم تحديد الموقع بنجاح!" });
      },
      (error) => {
        console.error("Error getting location", error);
        toast({ title: "خطأ في تحديد الموقع", description: "يرجى التأكد من تفعيل خدمات الموقع.", variant: "destructive" });
        setIsLocating(false);
      }
    );
  };

  const handleSubmitOrder = () => {
    if (!name || !phone) {
      toast({ title: "الرجاء إكمال البيانات", description: "يرجى إدخال الاسم ورقم الهاتف.", variant: "destructive" });
      return;
    }
    if (!location) {
      toast({ title: "الرجاء تحديد الموقع", description: "يرجى مشاركة موقعك لتسهيل عملية التوصيل.", variant: "destructive" });
      return;
    }

    const orderDetails = cartItems
      .map(item => `- ${item.quantity}x ${item.productName} (حجم: ${item.size.name})`)
      .join("\n");
      
    const locationLink = `https://www.google.com/maps?q=${location.lat},${location.lon}`;

    const paymentInfo = paymentMethod === 'cash' 
        ? "الدفع عند الاستلام" 
        : "تم الدفع عبر كريمي حاسب (رقم النقطة: 1299834)";

    const message = `
*طلب جديد من تطبيق كافتيريا الخير* 🎉

*الاسم:* ${name}
*الهاتف:* ${phone}

*الطلبات:*
${orderDetails}

*إجمالي السعر:* ${cartTotal.toLocaleString('ar-EG')} ر.ي

*طريقة الدفع:* ${paymentInfo}

*الموقع:*
${locationLink}
    `;

    const whatsappUrl = `https://wa.me/${STORE_SETTINGS.phone1.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    toast({ title: "تم إرسال طلبك بنجاح!", description: "سيتم التواصل معك قريباً للتأكيد." });
  };


  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="container flex-1 py-12">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">إتمام الطلب</CardTitle>
            <CardDescription>يرجى إدخال بياناتك لإكمال عملية الشراء.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input id="name" placeholder="اسمك..." value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input id="phone" type="tel" placeholder="رقم هاتفك..." value={phone} onChange={e => setPhone(e.target.value)} required />
            </div>
             <div className="space-y-2">
              <Label>موقع التوصيل</Label>
              <Button variant="outline" className="w-full" onClick={handleLocation} disabled={isLocating}>
                {isLocating ? <Loader2 className="ml-2 h-4 w-4 animate-spin" /> : <MapPin className="ml-2 h-4 w-4" />}
                {location ? "تم تحديد الموقع" : "مشاركة موقعي الحالي"}
              </Button>
              {location && <p className="text-xs text-center text-green-600">تم تحديد موقعك بنجاح. سيتم إرساله مع الطلب.</p>}
            </div>
            <div className="space-y-3">
                <Label>طريقة الدفع</Label>
                 <RadioGroup dir="rtl" defaultValue="cash" onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
                    <div>
                        <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                        <Label htmlFor="cash" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            نقداً عند الاستلام
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="kareemi" id="kareemi" className="peer sr-only" />
                        <Label htmlFor="kareemi" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            كريمي حاسب
                        </Label>
                    </div>
                </RadioGroup>
                {paymentMethod === 'kareemi' && (
                    <p className="text-sm text-center text-muted-foreground">رقم نقطة حاسب: 1299834</p>
                )}
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full" onClick={handleSubmitOrder} disabled={cartItems.length === 0}>
              <Send className="ml-2 h-4 w-4" />
              إرسال الطلب عبر واتساب
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
