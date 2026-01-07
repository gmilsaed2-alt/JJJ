"use client"

import { ProductDataTable } from "@/components/admin/ProductDataTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-headline">إدارة المنتجات</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="ml-2 h-4 w-4" />
            إضافة منتج جديد
          </Link>
        </Button>
      </div>
      <ProductDataTable />
    </div>
  );
}
