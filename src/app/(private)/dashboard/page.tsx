"use client";

import { UserIcon } from "lucide-react";
import { Card } from "~/components/ui/card";
import NumberCard from "./_components/NumberCard";

function DashboardPage() {
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <NumberCard
            title="Total Visitors"
            amount="12 345"
            description="+20.1% from last month"
            icon={UserIcon}
          />
          <NumberCard
            title="Total Visitors"
            amount="12 345"
            description="+20.1% from last month"
            icon={UserIcon}
          />
          <NumberCard
            title="Total Visitors"
            amount="12 345"
            description="+20.1% from last month"
            icon={UserIcon}
          />
          <NumberCard
            title="Total Visitors"
            amount="12 345"
            description="+20.1% from last month"
            icon={UserIcon}
          />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="min-h-96 xl:col-span-2"></Card>
          <Card></Card>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
