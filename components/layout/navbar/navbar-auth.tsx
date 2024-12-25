// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { useAuth } from "@/hooks/use-auth";

// export function NavbarAuth() {
//   // const { user, isAuthenticated, signOut } = useAuth();
//   const router = useRouter();

//   if (!isAuthenticated) {
//     return (
//       <Button asChild>
//         <Link href="/login">Sign In</Link>
//       </Button>
//     );
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//           <Avatar className="h-8 w-8">
//             <AvatarImage src={user?.image} alt={user?.name} />
//             <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-56">
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none">{user?.name}</p>
//             <p className="text-xs leading-none text-muted-foreground">
//               {user?.email}
//             </p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem asChild>
//           <Link href="/profile">Profile</Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem asChild>
//           <Link href="/settings">Settings</Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem
//           className="text-red-600 focus:text-red-600"
//           onClick={() => {
//             signOut();
//             router.push("/login");
//           }}
//         >
//           Sign Out
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import React from 'react'

export default function Navbar() {
  return (
    <div>Hello World</div>
  )
}
