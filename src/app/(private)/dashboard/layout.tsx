"use client";
import { TelescopeIcon, MenuIcon, CircleUserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { SheetTrigger, SheetContent, Sheet } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const NAV_LINKS = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Visitors",
    href: "/visitors",
  },
  {
    name: "Map",
    href: "/map",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Vitals",
    href: "/vitals",
  },
];

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: sessionData } = useSession();

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <TelescopeIcon className="h-6 w-6 stroke-primary" />
            <span className="sr-only">Elude Analytics</span>
          </Link>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={cn(
                "text-foreground transition-colors hover:opacity-75",
                {
                  "font-semibold text-primary":
                    link.href === window.location.pathname,
                },
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <TelescopeIcon className="h-6 w-6 stroke-primary" />
                <span className="sr-only">Elude Analytics</span>
              </Link>
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={cn(
                    "text-foreground transition-colors hover:opacity-75",
                    {
                      "font-semibold text-primary":
                        link.href === window.location.pathname,
                    },
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Active project: Sedenion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedenion">Sedenion</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={sessionData?.user.image ?? ""} />
                  <AvatarFallback>
                    <CircleUserIcon className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {sessionData?.user.name ??
                  sessionData?.user.email ??
                  sessionData?.user.id}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      {children}
    </>
  );
}

export default DashboardLayout;
