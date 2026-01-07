import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Save } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewProductPage() {
  // In a real app, this would be a client component with state and a form handler.
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-headline">إضافة منتج جديد</h1>
      <form>
        <Card>
          <CardHeader>
            <CardTitle>تفاصيل المنتج</CardTitle>
            <CardDescription>املأ الحقول أدناه لإضافة منتج جديد إلى قائمتك.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="product-name">اسم المنتج</Label>
              <Input id="product-name" placeholder="مثال: عصير مانجو" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-description">وصف المنتج</Label>
              <Textarea id="product-description" placeholder="وصف قصير وجذاب للمنتج..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product-category">القسم</Label>
                 <Select dir="rtl">
                  <SelectTrigger id="product-category">
                    <SelectValue placeholder="اختر قسمًا" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(category => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
               <div className="space-y-2">
                <Label htmlFor="product-price">السعر (الحجم الصغير)</Label>
                <Input id="product-price" type="number" placeholder="مثال: 500" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>صورة المنتج</Label>
              <div className="flex items-center justify-center w-full">
                  <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/70">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">انقر للرفع</span> أو اسحب وأفلت</p>
                          <p className="text-xs text-muted-foreground">PNG, JPG, WEBP (بحد أقصى 5 ميجابايت)</p>
                      </div>
                      <Input id="dropzone-file" type="file" className="hidden" />
                  </Label>
              </div> 
            </div>
             <Button type="submit">
                <Save className="ml-2 h-4 w-4" />
                حفظ المنتج
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
