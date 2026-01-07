"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { StoreSettings } from "@/lib/types";

interface SettingsFormProps {
  settings: StoreSettings;
}

export function SettingsForm({ settings }: SettingsFormProps) {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "تم حفظ الإعدادات (محاكاة)",
            description: "في تطبيق حقيقي، سيتم حفظ هذه البيانات في قاعدة البيانات.",
        });
    }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>المعلومات الأساسية</CardTitle>
          <CardDescription>
            تعديل معلومات التواصل والحالة العامة للمتجر.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">اسم المتجر</Label>
              <Input id="name" defaultValue={settings.name} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="slogan">شعار المتجر</Label>
              <Input id="slogan" defaultValue={settings.slogan} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">العنوان</Label>
            <Textarea id="address" defaultValue={settings.address} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone1">الهاتف الأساسي</Label>
              <Input id="phone1" defaultValue={settings.phone1} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="phone2">الهاتف الثانوي</Label>
              <Input id="phone2" defaultValue={settings.phone2} />
            </div>
          </div>
          
           <div className="space-y-2">
              <Label htmlFor="mapsLink">رابط الموقع (خرائط جوجل)</Label>
              <Input id="mapsLink" defaultValue={settings.mapsLink} dir="ltr" />
            </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <Switch id="store-status" defaultChecked={settings.storeStatus === 'open'} />
            <Label htmlFor="store-status">
              حالة المتجر: {settings.storeStatus === 'open' ? 'مفتوح' : 'مغلق'}
            </Label>
          </div>
          
           <Button type="submit">حفظ التغييرات</Button>
        </CardContent>
      </Card>
    </form>
  );
}
