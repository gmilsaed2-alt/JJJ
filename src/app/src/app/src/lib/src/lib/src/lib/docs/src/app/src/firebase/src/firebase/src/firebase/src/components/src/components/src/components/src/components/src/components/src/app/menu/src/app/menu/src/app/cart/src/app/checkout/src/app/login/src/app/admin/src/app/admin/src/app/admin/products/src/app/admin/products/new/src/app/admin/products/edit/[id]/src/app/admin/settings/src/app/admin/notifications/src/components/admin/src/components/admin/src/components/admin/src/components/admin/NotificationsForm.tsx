"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export function NotificationsForm() {
    const { toast } = useToast();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !message) {
            toast({
                title: "خطأ",
                description: "الرجاء إدخال العنوان والرسالة.",
                variant: "destructive",
            });
            return;
        }

        console.log("Sending notification:", { title, message });
        
        toast({
            title: "جاري إرسال الإشعار (محاكاة)",
            description: "في تطبيق حقيقي، سيتم إرسال هذا الإشعار لجميع المشتركين.",
        });

        // In a real app, you would have a server-side function to send push notifications
        // using the stored FCM tokens. This is just a simulation.
        setTitle("");
        setMessage("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>إرسال إشعار جديد</CardTitle>
          <CardDescription>
            أرسل عروضًا أو تحديثات جديدة لجميع العملاء الذين اشتركوا في الإشعارات.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">عنوان الإشعار</Label>
              <Input 
                id="title" 
                placeholder="مثال: عرض جديد!" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">نص الرسالة</Label>
              <Textarea 
                id="message" 
                placeholder="تفاصيل العرض أو الرسالة..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
           <Button type="submit">
                <Send className="ml-2 h-4 w-4" />
                إرسال الإشعار
            </Button>
        </CardContent>
      </Card>
    </form>
  );
}
