"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"  // npx shadcn-ui@latest add form
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'

const voiceCategories = ['alloy', 'shimmer', 'nova','echo','fable','onyx'];


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


const CreatePodcast = () => {

  const [voiceType, setVoiceType] = useState<string | null>(null)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <div className=''>
      <section className='mt-10 flex flex-col'>
        <h1 className="text-20 font-bold text-white-1">Create Podcast</h1>
        {/* <Button className='text-white-1 bg-orange-1'>Button</Button> */}

        {/* //TODO Shadcn Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
            
            <div className='flex flex-col gap-[30px] border-b border-black-5 pb-10'>
              <FormField
                control={form.control}
                name="podcastTitle"
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-2.5'>
                    <FormLabel className='text-16 font-bold text-white-1'>Username</FormLabel>
                    <FormControl>
                      <Input className='input-class focus-visible:ring-orange-1' placeholder="Please enter your username" {...field} />
                    </FormControl>
                    <FormMessage className='text-white-1' />
                  </FormItem>
                )}
              />

              <div className='flex flex-col gap-2.5'>
                <Label className='text-16 font-bold text-white-1'>
                  Select AI Voice
                </Label>

                {/* //TODO: Add AI Voice selection dropdown - slect from shadcn */}
                <Select onValueChange={(value)=> setVoiceType(value)}>
                  <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1')}>
                    <SelectValue placeholder="Select AI Voice" className='placeholder:text-gray-1' />
                  </SelectTrigger>
                  <SelectContent className='text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1'>
                    
                    {voiceCategories.map((category) => (
                      <SelectItem className='capitalize focus:bg-orange-1' key={category} value={category}>
                        {category}
                      </SelectItem>)
                    )}
                  
                  </SelectContent>

                  {/* //TODO: Preview the selected AI Voice */}
                  {voiceType && (
                    <audio
                      src={`/${voiceType}.mp3`}
                      autoPlay
                      className='hidden'>
                    </audio>
                  )}

                </Select>

                <FormField
                control={form.control}
                name="podcastDescription"
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-2.5'>
                    <FormLabel className='text-16 font-bold text-white-1'>Description</FormLabel>
                    <FormControl>
                      <Textarea className='input-class focus-visible:ring-orange-1' placeholder="Write a short podcast description" {...field} />
                    </FormControl>
                    <FormMessage className='text-white-1' />
                  </FormItem>
                )}
              />

              
              </div>      

            </div>

            
        
          </form>
        </Form>
        
      </section>
      
    </div>
  )
}

export default CreatePodcast 