import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ArrowDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"



import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

function App() {
  return (
    <>
      <div>
        <div>
          <Menubar className="h-[10vh] justify-between flex-wrap items-center">
            <h1 className="ml-2 cursor-pointer">Logo</h1>

            <div className="flex justify-center items-center">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">About Us</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Our Services</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Contact Us</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Blog</MenubarTrigger>
              </MenubarMenu>
            </div>

            <div className="flex justify-center items-center cursor-pointer">
              <Linkedin className="mr-2 text-red-500" size={28} strokeWidth={1.25} />
              <Twitter className="mr-2 text-red-500" size={28} strokeWidth={1.25} />
              <Facebook className="mr-2 text-red-500" size={28} strokeWidth={1.25} />
              <Instagram className="mr-2 text-red-500" size={28} strokeWidth={1.25} />
            </div>
          </Menubar>
        </div>
      </div>
      <div>

        <div>
          <div className="fixed flex justify-center items-center flex-col h-[90vh] text-white left-0 bottom-[36vh] xl:left-[50vh] xl:bottom-0">

            <h1 className="xl:text-3xl text-[15px]  font-bold">India&apos;s Most Comprehensive Wedding Planning Network</h1>
            <h3 className="font-semibold text-[11px] mt-4 xl:text-[15px]">Connect With Top-Rated Photographers, Makeup Artists, Manda , Caterers, And Others</h3>
          </div>

          <div className="absolute flex justify-center items-center flex-col h-[110vh] left-0 bottom-[-2vh] xl:top-[12vh] xl:bottom-0 xl:left-[60vh]">
            <DropdownMenu >
              <DropdownMenuTrigger asChild className="xl:w-[40vh] w-[20vh] flex justify-between">
                <Button variant="outline">Vendors <ArrowDown /></Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="xl:w-[40vh] w-[20vh]">
                <DropdownMenuItem>
                  Vendor 1
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          <div className="absolute flex justify-center items-center flex-col h-[110vh] left-[32vh] bottom-[-2vh] xl:bottom-0 xl:top-[12vh] xl:left-[50vw]">
            <DropdownMenu >
              <DropdownMenuTrigger asChild className="xl:w-[40vh] w-[20vh] flex justify-between">
                <Button variant="outline">Location <ArrowDown /></Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="xl:w-[40vh] w-[20vh]">
                <DropdownMenuItem>
                  Pune
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover mt-[10vh] xl:mt-0" alt="" />

        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="mt-5 items-center flex justify-center flex-col text-red-500">

          <h1 className="text-black font-meowScript text-3xl">Our Services</h1>
          <h2 className="font-serif text-xl">What we offer for you</h2>
          <p>________________________________________</p>
          <p>________________________________</p>
        </div>
        <div>

          <Carousel orientation="horizontal" className="w-[90vw] mt-[20vh] xl:mt-[5vh] h-[30vw] bg-white flex justify-center items-center">
            <CarouselContent className=" text-white mr-[60vw] xl:w-[25vw] w-[100vw]">
              <CarouselItem className="h-[40vh] xl:ml-5 ml-0">
                <Image src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/mandapImageCompressed.jpg" className="h-full w-[45vh]  border-red-500 border-8 rounded-md" alt="" />

                <h1 className="bg-red-500 text-white rounded-md xl:text-lg text-sm font-serif font-bold absolute bottom-2 w-[20vh] text-center left-[17vh]">Videographer</h1>
              </CarouselItem>

              <CarouselItem className="h-[40vh] ml-5">
                <Image src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/mandapImageCompressed.jpg" className="h-full w-[45vh]  border-red-500 border-8 rounded-md" alt="" />

              </CarouselItem>

              <CarouselItem className="h-[40vh] ml-5">
                <Image src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/mandapImageCompressed.jpg" className="h-full w-[45vh]  border-red-500 border-8 rounded-md" alt="" />


              </CarouselItem>

              <CarouselItem className="h-[40vh] ml-5">
                <Image src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/mandapImageCompressed.jpg" className="h-full w-[45vh]  border-red-500 border-8 rounded-md" alt="" />


              </CarouselItem>

              <CarouselItem className="h-[40vh] ml-5">
                <Image src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/mandapImageCompressed.jpg" className="h-full w-[45vh]  border-red-500 border-8 rounded-md" alt="" />

              </CarouselItem>


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default App